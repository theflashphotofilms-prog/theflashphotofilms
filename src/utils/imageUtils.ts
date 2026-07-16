/**
 * Utility functions for image handling
 */

interface ImageMetadata {
  width: number;
  height: number;
  aspectRatio: number;
  mimeType: string;
  fileSize: number; // in bytes
}

/**
 * Get image metadata from a file
 */
export const getImageMetadata = (file: File): Promise<ImageMetadata> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      const metadata: ImageMetadata = {
        width: img.width,
        height: img.height,
        aspectRatio: img.width / img.height,
        mimeType: file.type,
        fileSize: file.size,
      };

      // Clean up
      URL.revokeObjectURL(url);
      resolve(metadata);
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };

    img.src = url;
  });
};

/**
 * Optimize image by resizing and compressing
 */
export const optimizeImage = (
  file: File,
  maxWidth: number,
  maxHeight: number,
  quality: number = 0.8
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      // Calculate new dimensions maintaining aspect ratio
      let { width, height } = img;
      
      if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
      }
      
      if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Could not create optimized image'));
          }
        },
        file.type,
        quality
      );

      URL.revokeObjectURL(img.src);
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(img.src);
      reject(err);
    };
  });
};

/**
 * Validate image file based on type and size
 */
export const validateImage = (
  file: File,
  maxSizeInMB: number = 5,
  allowedTypes: string[] = ['image/jpeg', 'image/png', 'image/webp']
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!allowedTypes.includes(file.type)) {
    errors.push(`Invalid file type. Allowed types: ${allowedTypes.join(', ')}`);
  }

  if (file.size > maxSizeInMB * 1024 * 1024) {
    errors.push(`File size exceeds ${maxSizeInMB}MB limit`);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Convert image to base64 string
 */
export const imageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Could not convert image to base64'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Error reading file'));
    };
    
    reader.readAsDataURL(file);
  });
};