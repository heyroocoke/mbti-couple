import { useEffect } from 'react';
import styles from './KakaoShareButton.module.css';

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: object) => void;
      };
    };
  }
}

interface KakaoShareButtonProps {
  title: string;
  description: string;
  imageUrl?: string;
  buttonText?: string;
}

export default function KakaoShareButton({
  title,
  description,
  imageUrl = 'https://mbticouple.com/og-image.png',
  buttonText = '카카오톡 공유하기'
}: KakaoShareButtonProps) {
  useEffect(() => {
    // Kakao SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      // 카카오 개발자 센터에서 JavaScript 키 발급 필요
      // https://developers.kakao.com 에서 앱 생성 후 키 입력
      window.Kakao.init('9223f465d8b869156d8ff2806eea983b');
    }
  }, []);

  const handleShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '테스트 하러가기',
            link: {
              mobileWebUrl: 'https://mbticouple.com',
              webUrl: 'https://mbticouple.com',
            },
          },
        ],
      });
    } else {
      // Kakao SDK가 로드되지 않은 경우 URL 복사
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    } catch {
      // 클립보드 API 지원 안되는 경우
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('링크가 복사되었습니다!');
    }
  };

  return (
    <div className={styles.shareButtons}>
      <button className={styles.kakaoButton} onClick={handleShare}>
        <span className={styles.kakaoIcon}>💬</span>
        {buttonText}
      </button>
      <button className={styles.copyButton} onClick={handleCopyLink}>
        <span className={styles.copyIcon}>🔗</span>
        링크 복사
      </button>
    </div>
  );
}
