import { useEffect, useRef } from 'react';

interface KakaoAdFitProps {
  unit: string;
  width: number;
  height: number;
  className?: string;
}

declare global {
  interface Window {
    adfit?: unknown;
  }
}

export default function KakaoAdFit({ unit, width, height, className }: KakaoAdFitProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!unit) return;

    if (initialized.current) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const displayAd = () => {
      try {
        const adfit = window.adfit as unknown;
        if (adfit) {
          if (typeof adfit === 'function') {
            adfit();
            initialized.current = true;
            return true;
          }
          const adfitObj = adfit as { display?: (unit: string) => void };
          if (typeof adfitObj.display === 'function') {
            adfitObj.display(unit);
            initialized.current = true;
            return true;
          }
        }
      } catch {
        // silently fail
      }
      return false;
    };

    // DOM이 완전히 렌더링된 후 실행하기 위해 setTimeout 사용
    timeoutId = setTimeout(() => {
      if (!displayAd()) {
        let retryCount = 0;
        intervalId = setInterval(() => {
          retryCount++;
          if (displayAd() || retryCount > 50) {
            if (intervalId) {
              clearInterval(intervalId);
              intervalId = null;
            }
          }
        }, 100);
      }
    }, 0);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);

      // cleanup 시 destroy 호출하지 않음 - SPA에서 문제 발생 가능
      // ins 태그가 DOM에서 제거되면 SDK가 자동으로 처리
    };
  }, [unit]);

  // 컴포넌트 완전 unmount 시 초기화 플래그 리셋
  useEffect(() => {
    return () => {
      initialized.current = false;
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: '0 auto',
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
