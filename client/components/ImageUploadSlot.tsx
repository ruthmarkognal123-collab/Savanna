import React, { useCallback, useRef, useState } from "react";

interface ImageUploadSlotProps {
  value?: string;
  onChange?: (url: string) => void;
  alt?: string;
  className?: string;
  rounded?: string; // tailwind rounded classes
  accept?: string;
  label?: string;
  
  // sizing helpers
  widthClass?: string;
  heightClass?: string;
}

export default function ImageUploadSlot({
  value,
  onChange,
  alt = "",
  className = "",
  rounded = "rounded",
  accept = "image/*",
  label = "Drop or click to upload",
  widthClass = "w-full",
  heightClass = "h-full",
}: ImageUploadSlotProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const openFile = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files || files.length === 0) return;
      const file = files[0];
      const url = URL.createObjectURL(file);
      onChange?.(url);
    },
    [onChange]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  return (
    <div
      className={`relative ${widthClass} ${heightClass} ${rounded} overflow-hidden ${className}`}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
      }}
      onDrop={onDrop}
    >
      {value ? (
        <img src={value} alt={alt} className={`object-cover ${widthClass} ${heightClass}`} />
      ) : (
        <div
          className={`flex flex-col items-center justify-center ${widthClass} ${heightClass} border-2 border-dashed border-orange-400/60 bg-muted/20 text-muted-foreground ${rounded}`}
          onClick={openFile}
          role="button"
          aria-label={label}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image w-6 h-6 mb-1 text-orange-500">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <circle cx="9" cy="9" r="2"></circle>
            <path d="m21 15-5-5L5 21"></path>
          </svg>
          <span className="text-xs">{isDragging ? "Release to upload" : label}</span>
        </div>
      )}

      {/* Change overlay */}
      <button
        type="button"
        onClick={openFile}
        className={`absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center ${rounded}`}
        aria-label="Change image"
      >
        <span className="opacity-0 hover:opacity-100 bg-white/90 text-black text-xs px-2 py-1 rounded">Change</span>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}
