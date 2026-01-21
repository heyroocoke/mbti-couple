import { useEffect, useRef } from 'react';

interface KakaoAdFitProps {
  unit: string;
  width: number;
  height: number;
  className?: string;
}

declare global {
  interface Window {
    // 새 버전: adfit이 함수로 동작
    adfit?: (() => void) & {
      display?: (unit: string) => void;
      destroy?: (unit: string) => void;
    };
  }
}

export default function KakaoAdFit({ unit, width, height, className }: KakaoAdFitProps) {
  const insRef = useRef<HTMLInsElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!unit) return;

    // 이미 초기화되었으면 스킵 (StrictMode 대응)
    if (initialized.current) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const displayAd = () => {
      try {
        if (window.adfit) {
          if (typeof window.adfit === 'function') {
            window.adfit();
            initialized.current = true;
            return true;
          }
          if (typeof window.adfit.display === 'function') {
            window.adfit.display(unit);
            initialized.current = true;
            return true;
          }
        }
      } catch (e) {
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
        ref={insRef}
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={unit}
        data-ad-width={width}
        data-ad-height={height}
      />
    </div>
  );
}
