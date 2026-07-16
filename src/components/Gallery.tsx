'use client';

import { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  columns?: number;
}

const Gallery = ({ items, columns = 3 }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    const currentIndex = items.findIndex(item => item.id === selectedImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % items.length;
    } else {
      newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    }

    setSelectedImage(items[newIndex]);
  };

  return (
    <div>
      <div 
        className={`grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} lg:grid-cols-${Math.min(columns, 4)}`}
      >
        {items.map((item) => (
          <div 
            key={item.id} 
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            <OptimizedImage
              src={item.src}
              alt={item.alt}
              width={400}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
            />
            {item.title && (
              <div className="p-3 bg-white">
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                {item.description && (
                  <p className="text-sm text-gray-600 truncate">{item.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-75"
              onClick={closeLightbox}
            >
              ✕
            </button>
            
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-75"
              onClick={() => navigateImage('prev')}
            >
              ‹
            </button>
            
            <button
              className="absolute right-14 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-75"
              onClick={() => navigateImage('next')}
            >
              ›
            </button>
            
            <div className="flex flex-col items-center">
              <OptimizedImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] object-contain"
              />
              {selectedImage.title && (
                <h3 className="text-xl font-bold text-white mt-4">{selectedImage.title}</h3>
              )}
              {selectedImage.description && (
                <p className="text-gray-200 mt-2 text-center max-w-2xl">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;