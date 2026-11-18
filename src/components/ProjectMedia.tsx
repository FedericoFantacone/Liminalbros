import { useEffect, useRef, useState } from "react";

type ProjectMediaProps = {
  image: string;
  video?: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

/**
 * Cover media for project cards and detail pages.
 * Uses the looping video when available and falls back to the poster image
 * for reduced-motion users or unsupported browsers.
 */
export function ProjectMedia({
  image,
  video,
  alt,
  className = "",
  eager = false,
}: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (!video) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [video]);

  useEffect(() => {
    const element = videoRef.current;
    if (!element || reducedMotion) return;

    // Only play while the card is on screen to keep CPU and battery usage low.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.play().catch(() => {});
        } else {
          element.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  if (!video || reducedMotion) {
    return (
      <img
        src={image}
        alt={alt}
        width={1200}
        height={800}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={className}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={video}
      poster={image}
      aria-label={alt}
      loop
      muted
      playsInline
      preload={eager ? "auto" : "metadata"}
      tabIndex={-1}
      className={className}
    />
  );
}
