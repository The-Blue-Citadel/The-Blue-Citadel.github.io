import { useEffect, useRef, type CSSProperties, type HTMLAttributes } from 'react';

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: 'div' | 'li' | 'article';
  delay?: number;
  [dataAttribute: `data-${string}`]: string | undefined;
}

/** Fades its content in once it scrolls into view. Content stays visible without JavaScript. */
export function Reveal({ as: Tag = 'div', delay = 0, className, style, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className ?? ''}`}
      style={{ ...style, ['--reveal-delay' as string]: `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
