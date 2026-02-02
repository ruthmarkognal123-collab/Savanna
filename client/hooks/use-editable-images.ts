import { useState, useEffect, useCallback } from 'react';

interface ImageData {
  url: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface UseEditableImagesOptions {
  storageKey: string;
  defaultImages?: Record<string, ImageData>;
  enableEditMode?: boolean;
}

export function useEditableImages({
  storageKey,
  defaultImages = {},
  enableEditMode = false,
}: UseEditableImagesOptions) {
  const [images, setImages] = useState<Record<string, ImageData>>(defaultImages);
  const [isEditMode, setIsEditMode] = useState(enableEditMode);
  const [isLoading, setIsLoading] = useState(true);

  // Load images from localStorage on mount
  useEffect(() => {
    try {
      const storedImages = localStorage.getItem(storageKey);
      if (storedImages) {
        const parsedImages = JSON.parse(storedImages);
        setImages({ ...defaultImages, ...parsedImages });
      }
    } catch (error) {
      console.error('Failed to load images from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, [storageKey, defaultImages]);

  // Save images to localStorage whenever images change
  useEffect(() => {
    if (!isLoading) {
      try {
        // Only save non-default images to localStorage
        const imagesToSave: Record<string, ImageData> = {};
        Object.entries(images).forEach(([key, image]) => {
          if (!defaultImages[key] || image.url !== defaultImages[key].url) {
            imagesToSave[key] = image;
          }
        });
        localStorage.setItem(storageKey, JSON.stringify(imagesToSave));
      } catch (error) {
        console.error('Failed to save images to localStorage:', error);
      }
    }
  }, [images, storageKey, defaultImages, isLoading]);

  const updateImage = useCallback((key: string, imageData: Partial<ImageData>) => {
    setImages(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        ...imageData,
      },
    }));
  }, []);

  const getImage = useCallback((key: string): ImageData | undefined => {
    return images[key];
  }, [images]);

  const resetImage = useCallback((key: string) => {
    if (defaultImages[key]) {
      setImages(prev => ({
        ...prev,
        [key]: defaultImages[key],
      }));
    } else {
      setImages(prev => {
        const newImages = { ...prev };
        delete newImages[key];
        return newImages;
      });
    }
  }, [defaultImages]);

  const resetAllImages = useCallback(() => {
    setImages(defaultImages);
    localStorage.removeItem(storageKey);
  }, [defaultImages, storageKey]);

  const toggleEditMode = useCallback(() => {
    setIsEditMode(prev => !prev);
  }, []);

  return {
    images,
    isEditMode,
    isLoading,
    updateImage,
    getImage,
    resetImage,
    resetAllImages,
    toggleEditMode,
    setIsEditMode,
  };
}
