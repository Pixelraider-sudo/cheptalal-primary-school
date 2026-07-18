// Image optimization utilities — provides responsive Unsplash URLs
// and future-ready helpers for when real photos are uploaded.

export interface ResponsiveImage {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Generate a responsive srcSet for an Unsplash image.
 * Replace with your CDN/image service when real photos are available.
 */
export function unsplashSrcSet(baseUrl: string, widths: number[] = [400, 700, 1000, 1400]): string {
  // Strip existing w= param and rebuild
  const base = baseUrl.replace(/[?&]w=\d+/, '').replace(/[?&]q=\d+/, '').replace(/\?$/, '');
  return widths.map((w) => `${base}?w=${w}&q=80&auto=format ${w}w`).join(', ');
}

/**
 * Build a complete responsive image object from a base Unsplash URL.
 */
export function makeResponsiveImage(
  baseUrl: string,
  alt: string,
  sizes = '(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
): ResponsiveImage {
  return {
    src: `${baseUrl.split('?')[0]}?w=800&q=80&auto=format`,
    srcSet: unsplashSrcSet(baseUrl),
    sizes,
    alt,
  };
}

/**
 * Blur placeholder data URI (10px×6px green blur).
 * Use as img placeholder while the real image loads.
 */
export const BLUR_PLACEHOLDER =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEA//EACMQAAIBBAIBBQAAAAAAAAAAAAECAwQFERIhBhMiMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aj3mTtjjOa+mrFULSiHkS8GPhXqVVnHSCK3XISAAAAAf/2Q==';
