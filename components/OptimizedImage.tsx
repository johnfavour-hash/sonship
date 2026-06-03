import React, { useState, useEffect } from "react";

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
  { width: 480, queries: ["(max-width: 640px)"] },
  { width: 768, queries: ["(min-width: 641px) and (max-width: 1024px)"] },
  { width: 1024, queries: ["(min-width: 1025px) and (max-width: 1440px)"] },
  { width: 1440, queries: ["(min-width: 1441px)"] },
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
  const [supportsWebP, setSupportsWebP] = useState(true);

  useEffect(() => {
    // Check WebP support
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    setSupportsWebP(
      canvas.toDataURL("image/webp").indexOf("image/webp") === 5
    );
  }, []);

  const srcSetWebP = BREAKPOINTS.map((bp) =>
    `${src}-${bp.width}.webp ${bp.width}w`
  ).join(", ");

  // Fallback to original JPG with -480 as default
  const srcSetJPG = `${src}-480.jpg 480w, ${src}-768.jpg 768w, ${src}-1024.jpg 1024w, ${src}-1440.jpg 1440w`;

  // Default src is the smallest version for faster initial load
  const defaultSrc = supportsWebP ? `${src}-480.webp` : `${src}-480.jpg`;

  return (
    <picture>
      {/* WebP format - modern browsers */}
      {supportsWebP && (
        <>
          <source srcSet={srcSetWebP} type="image/webp" />
        </>
      )}
      {/* JPG fallback */}
      <source srcSet={srcSetJPG} type="image/jpeg" />
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
