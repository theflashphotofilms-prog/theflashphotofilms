import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  priority?: boolean;
  caption?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  priority = false, 
  caption, 
  ...props 
}: OptimizedImageProps) => {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
      {caption && <figcaption className="text-sm text-gray-500 mt-2 text-center">{caption}</figcaption>}
    </figure>
  );
};

export default OptimizedImage;