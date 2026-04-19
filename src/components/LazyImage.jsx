import { useEffect, useRef, useState } from 'react';

/**
 * 懒加载背景图组件
 * 只在元素进入视口时才加载图片
 */
const LazyImage = ({
  src,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
  className = '',
  style = {},
  children,
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imageSrc === placeholder) {
            // 开始加载图片
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [src, imageSrc, placeholder, threshold, rootMargin]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      {children}
    </div>
  );
};

export default LazyImage;
