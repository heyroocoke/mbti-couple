import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import KakaoAdFit from "../components/KakaoAdFit";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          <span className={styles.counterText}>
            {t('home.popularBadge')}
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

      {/* MBTI 소개 섹션 */}
      <motion.section
        className={styles.introSection}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🧠</span>
          {t('home.whatIsMbtiTitle')}
        </h2>
        <div className={styles.introContent}>
          <p>{t('home.whatIsMbtiDesc1')}</p>
          <div className={styles.mbtiDimensions}>
            <div className={styles.dimension}>
              <span className={styles.dimensionLabel}>E / I</span>
              <span className={styles.dimensionText}>{t('home.dimensionEI')}</span>
            </div>
            <div className={styles.dimension}>
              <span className={styles.dimensionLabel}>S / N</span>
              <span className={styles.dimensionText}>{t('home.dimensionSN')}</span>
            </div>
            <div className={styles.dimension}>
              <span className={styles.dimensionLabel}>T / F</span>
              <span className={styles.dimensionText}>{t('home.dimensionTF')}</span>
            </div>
            <div className={styles.dimension}>
              <span className={styles.dimensionLabel}>J / P</span>
              <span className={styles.dimensionText}>{t('home.dimensionJP')}</span>
            </div>
          </div>
          <p>{t('home.whatIsMbtiDesc2')}</p>
        </div>
      </motion.section>

      {/* 이런 분들께 추천 섹션 */}
      <motion.section
        className={styles.recommendSection}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>💝</span>
          {t('home.recommendTitle')}
        </h2>
        <div className={styles.recommendList}>
          <div className={styles.recommendItem}>
            <span className={styles.recommendEmoji}>💑</span>
            <p>{t('home.recommend1')}</p>
          </div>
          <div className={styles.recommendItem}>
            <span className={styles.recommendEmoji}>🤔</span>
            <p>{t('home.recommend2')}</p>
          </div>
          <div className={styles.recommendItem}>
            <span className={styles.recommendEmoji}>💘</span>
            <p>{t('home.recommend3')}</p>
          </div>
          <div className={styles.recommendItem}>
            <span className={styles.recommendEmoji}>🔮</span>
            <p>{t('home.recommend4')}</p>
          </div>
        </div>
      </motion.section>

      {/* FAQ 섹션 */}
      <motion.section
        className={styles.faqSection}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>❓</span>
          {t('home.faqTitle')}
        </h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>{t('home.faq1Question')}</h3>
            <p className={styles.faqAnswer}>{t('home.faq1Answer')}</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>{t('home.faq2Question')}</h3>
            <p className={styles.faqAnswer}>{t('home.faq2Answer')}</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>{t('home.faq3Question')}</h3>
            <p className={styles.faqAnswer}>{t('home.faq3Answer')}</p>
          </div>
        </div>
        <motion.button
          className={styles.guideButton}
          onClick={() => navigate("/guide")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {t('home.viewGuide')}
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
