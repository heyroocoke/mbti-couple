import { useEffect, useRef } from 'react';
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
  linkUrl?: string;
  showAllOptions?: boolean;
}

export default function KakaoShareButton({
  title,
  description,
  imageUrl = 'https://mbticouple.com/og-image.png',
  linkUrl,
  showAllOptions = false
}: KakaoShareButtonProps) {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('9223f465d8b869156d8ff2806eea983b');
    }
  }, []);

  const handleShare = () => {
    const shareUrl = linkUrl || window.location.href;
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: t('common.takeTest'),
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
        ],
      });
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    const shareUrl = linkUrl || window.location.href;
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert(t('common.linkCopied'));
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert(t('common.linkCopied'));
    }
  };

  const handleTwitterShare = () => {
    const shareUrl = linkUrl || window.location.href;
    const text = `${title}\n${description}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const handleInstagramShare = async () => {
    // 인스타그램은 웹에서 직접 공유가 불가능하므로 이미지 다운로드 방식 사용
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 캔버스 설정 (1080x1080 - 인스타그램 최적 사이즈)
    canvas.width = 1080;
    canvas.height = 1080;

    // 배경 그라데이션
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
    gradient.addColorStop(0, '#FFE5EC');
    gradient.addColorStop(0.5, '#E5E5FF');
    gradient.addColorStop(1, '#E5FFFA');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1080);

    // 텍스트 설정
    ctx.textAlign = 'center';
    ctx.fillStyle = '#333';

    // 타이틀
    ctx.font = 'bold 60px sans-serif';
    ctx.fillText(title, 540, 400);

    // 설명
    ctx.font = '36px sans-serif';
    ctx.fillStyle = '#666';
    const lines = wrapText(ctx, description, 900);
    lines.forEach((line, i) => {
      ctx.fillText(line, 540, 500 + i * 50);
    });

    // 웹사이트
    ctx.font = 'bold 32px sans-serif';
    ctx.fillStyle = '#FF6B9D';
    ctx.fillText('mbticouple.com', 540, 900);

    // 이미지 다운로드
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'mbti-result.png';
    link.href = dataUrl;
    link.click();

    alert(t('common.imageDownloaded'));
  };

  // 텍스트 줄바꿈 헬퍼 함수
  const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] => {
    const words = text.split('');
    const lines: string[] = [];
    let currentLine = '';

    for (const char of words) {
      const testLine = currentLine + char;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = char;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines.slice(0, 3); // 최대 3줄
  };

  return (
    <div className={styles.shareContainer}>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div className={styles.shareButtons}>
        <button className={styles.kakaoButton} onClick={handleShare}>
          <span className={styles.kakaoIcon}>💬</span>
          {t('common.shareKakao')}
        </button>
        <button className={styles.copyButton} onClick={handleCopyLink}>
          <span className={styles.copyIcon}>🔗</span>
          {t('common.copyLink')}
        </button>
        {showAllOptions && (
          <>
            <button className={styles.twitterButton} onClick={handleTwitterShare}>
              <span className={styles.twitterIcon}>𝕏</span>
              {t('common.shareTwitter')}
            </button>
            <button className={styles.instagramButton} onClick={handleInstagramShare}>
              <span className={styles.instagramIcon}>📷</span>
              {t('common.shareInstagram')}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
