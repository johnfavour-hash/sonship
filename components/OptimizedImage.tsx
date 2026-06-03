import React, { useState } from "react";

interface OptimizedImageProps {
  src: string; // Base path without extension, e.g., "/assets/gallery/image-name"
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  width?: number;
  height?: number;
}

const BREAKPOINTS = [
  { width: 480 },
  { width: 768 },
  { width: 1024 },
  { width: 1440 },
];

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  onLoad,
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate responsive srcset for WebP images only
  const srcSetWebP = BREAKPOINTS.map((bp) =>
    `${src}-${bp.width}.webp ${bp.width}w`
  ).join(", ");

  // Default src is the 480px version for fastest initial load
  const defaultSrc = `${src}-480.webp`;

  return (
    <picture>
      {/* WebP format with responsive sizes */}
      <source srcSet={srcSetWebP} type="image/webp" sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, (max-width: 1440px) 1024px, 1440px" />
      {/* Img tag with lazy loading */}
      <img
        src={defaultSrc}
        alt={alt}
        className={`${className} ${!isLoaded ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        onLoad={() => {
          setIsLoaded(true);
          onLoad?.();
        }}
      />
    </picture>
  );
};
