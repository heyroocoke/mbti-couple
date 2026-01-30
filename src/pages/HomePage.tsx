import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSEO } from "../hooks/useSEO";
import KakaoAdFit from "../components/KakaoAdFit";
import styles from "./HomePage.module.css";

// 테스트 카운터 관리
const COUNTER_STORAGE_KEY = 'mbti_test_counter';
const BASE_COUNT = 128547; // 기본 시작 숫자

function getTestCount(): number {
  if (typeof window === 'undefined') return BASE_COUNT;
  const stored = localStorage.getItem(COUNTER_STORAGE_KEY);
  if (stored) {
    return parseInt(stored, 10);
  }
  // 초기값 설정
  localStorage.setItem(COUNTER_STORAGE_KEY, BASE_COUNT.toString());
  return BASE_COUNT;
}

export function incrementTestCount(): void {
  if (typeof window === 'undefined') return;
  const current = getTestCount();
  localStorage.setItem(COUNTER_STORAGE_KEY, (current + 1).toString());
}

// 숫자 애니메이션 훅
function useCountAnimation(targetCount: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const startCount = Math.max(0, targetCount - 1000);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startCount + (targetCount - startCount) * eased);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetCount, duration]);

  return count;
}

export default function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [testCount, setTestCount] = useState(BASE_COUNT);
  const animatedCount = useCountAnimation(testCount);

  useEffect(() => {
    setTestCount(getTestCount());
  }, []);

  useSEO({
    title: t('home.seoTitle'),
    description: t('home.seoDescription'),
  });

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.floatingEmojis}>
          <span className={styles.emoji} style={{ animationDelay: "0s" }}>
            💕
          </span>
          <span className={styles.emoji} style={{ animationDelay: "0.5s" }}>
            ✨
          </span>
          <span className={styles.emoji} style={{ animationDelay: "1s" }}>
            💫
          </span>
          <span className={styles.emoji} style={{ animationDelay: "1.5s" }}>
            🌸
          </span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleHighlight}>MBTI</span> {t('home.title')}
        </h1>

        <p className={styles.subtitle}>
          {t('home.subtitle1')}
          <br />
          {t('home.subtitle2')}
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📝</span>
            <span className={styles.featureText}>{t('home.feature1')}</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>💑</span>
            <span className={styles.featureText}>{t('home.feature2')}</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>💡</span>
            <span className={styles.featureText}>{t('home.feature3')}</span>
          </div>
        </div>

        <motion.div
          className={styles.socialProof}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className={styles.fireEmoji}>🔥</span>
          <span className={styles.counterText}>
            {t('home.testCounter', { formattedCount: animatedCount.toLocaleString() })}
          </span>
        </motion.div>

        <motion.button
          className={styles.startButton}
          onClick={() => navigate("/test")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('home.startButton')}
        </motion.button>

        <motion.button
          className={styles.compatibilityButton}
          onClick={() => navigate("/compatibility")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {t('home.compatibilityButton')}
        </motion.button>

        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span className={styles.scrollArrow}>↓</span>
          <span className={styles.scrollText}>{t('home.scrollHint')}</span>
        </motion.div>

        <motion.div
          className={styles.adContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <KakaoAdFit
            unit="DAN-nODXgpL0c3WdqyDS"
            width={300}
            height={250}
          />
        </motion.div>
      </motion.div>

      {/* 결과 미리보기 섹션 */}
      <motion.section
        className={styles.previewSection}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className={styles.previewTitle}>
          <span className={styles.previewIcon}>✨</span>
          {t('home.previewTitle')}
        </h2>
        <p className={styles.previewSubtitle}>{t('home.previewSubtitle')}</p>

        <div className={styles.previewCards}>
          {/* 카드 1: ENFP & INTJ */}
          <motion.div
            className={styles.previewCard}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className={styles.coupleEmojis}>
              <span>🦋</span>
              <span className={styles.heartIcon}>💕</span>
              <span>🦉</span>
            </div>
            <div className={styles.coupleTypes}>
              <span className={styles.typeLabel} style={{ color: '#FF6B9D' }}>ENFP</span>
              <span className={styles.matchSymbol}>×</span>
              <span className={styles.typeLabel} style={{ color: '#9B6BFF' }}>INTJ</span>
            </div>
            <div className={styles.matchScore}>
              {'💖'.repeat(4)}{'🤍'.repeat(1)}
            </div>
            <div className={styles.matchTitle}>{t('home.previewCard1Title')}</div>
            <div className={styles.blurOverlay}>
              <span>{t('home.previewBlurText')}</span>
            </div>
          </motion.div>

          {/* 카드 2: INFJ & ENFP */}
          <motion.div
            className={styles.previewCard}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className={styles.coupleEmojis}>
              <span>🔮</span>
              <span className={styles.heartIcon}>💕</span>
              <span>🦋</span>
            </div>
            <div className={styles.coupleTypes}>
              <span className={styles.typeLabel} style={{ color: '#6BFFB8' }}>INFJ</span>
              <span className={styles.matchSymbol}>×</span>
              <span className={styles.typeLabel} style={{ color: '#FF6B9D' }}>ENFP</span>
            </div>
            <div className={styles.matchScore}>
              {'💖'.repeat(5)}
            </div>
            <div className={styles.matchTitle}>{t('home.previewCard2Title')}</div>
            <div className={styles.blurOverlay}>
              <span>{t('home.previewBlurText')}</span>
            </div>
          </motion.div>

          {/* 카드 3: ISTP & ESFJ */}
          <motion.div
            className={styles.previewCard}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className={styles.coupleEmojis}>
              <span>🔧</span>
              <span className={styles.heartIcon}>💕</span>
              <span>🤗</span>
            </div>
            <div className={styles.coupleTypes}>
              <span className={styles.typeLabel} style={{ color: '#FFB86B' }}>ISTP</span>
              <span className={styles.matchSymbol}>×</span>
              <span className={styles.typeLabel} style={{ color: '#6B9BFF' }}>ESFJ</span>
            </div>
            <div className={styles.matchScore}>
              {'💖'.repeat(5)}
            </div>
            <div className={styles.matchTitle}>{t('home.previewCard3Title')}</div>
            <div className={styles.blurOverlay}>
              <span>{t('home.previewBlurText')}</span>
            </div>
          </motion.div>
        </div>

        <motion.button
          className={styles.previewCta}
          onClick={() => navigate("/test")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {t('home.previewCta')}
        </motion.button>
      </motion.section>

      <div className={styles.decoration}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
    </div>
  );
}
