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

      <div className={styles.decoration}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
    </div>
  );
}
