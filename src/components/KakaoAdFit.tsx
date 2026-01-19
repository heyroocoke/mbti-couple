import { useEffect, useRef } from 'react';

interface KakaoAdFitProps {
  unit: string;
  width: number;
  height: number;
  className?: string;
}

declare global {
  interface Window {
    adfit?: {
      display: (unit: string) => void;
      destroy: (unit: string) => void;
    };
  }
}

export default function KakaoAdFit({ unit, width, height, className }: KakaoAdFitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;

    const timer = setTimeout(() => {
      if (window.adfit && containerRef.current) {
        window.adfit.display(unit);
        isLoaded.current = true;
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (window.adfit && isLoaded.current) {
        window.adfit.destroy(unit);
        isLoaded.current = false;
      }
    };
  }, [unit]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={unit}
        data-ad-width={width}
        data-ad-height={height}
      />
    </div>
  );
}
