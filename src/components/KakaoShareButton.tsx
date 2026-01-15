import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
}

export default function KakaoShareButton({
  title,
  description,
  imageUrl = 'https://mbticouple.com/og-image.png'
}: KakaoShareButtonProps) {
  const { t } = useTranslation();

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
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
            title: t('common.takeTest'),
            link: {
              mobileWebUrl: 'https://mbticouple.com',
              webUrl: 'https://mbticouple.com',
            },
          },
        ],
      });
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert(t('common.linkCopied'));
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert(t('common.linkCopied'));
    }
  };

  return (
    <div className={styles.shareButtons}>
      <button className={styles.kakaoButton} onClick={handleShare}>
        <span className={styles.kakaoIcon}>💬</span>
        {t('common.shareKakao')}
      </button>
      <button className={styles.copyButton} onClick={handleCopyLink}>
        <span className={styles.copyIcon}>🔗</span>
        {t('common.copyLink')}
      </button>
    </div>
  );
}
