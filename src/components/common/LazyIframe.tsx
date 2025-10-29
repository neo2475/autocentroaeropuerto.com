'use client';
import { useEffect, useRef, useState } from 'react';

type Props = React.IframeHTMLAttributes<HTMLIFrameElement> & {
  placeholderHeight?: number | string;
};

export default function LazyIframe({ placeholderHeight = 256, ...props }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: '200px 0px' }
    );

    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: placeholderHeight }}>
      {visible ? (
        <iframe {...props} />
      ) : (
        <div className="w-full h-full bg-muted/40 animate-pulse rounded" style={{ height: placeholderHeight }} />
      )}
    </div>
  );
}
