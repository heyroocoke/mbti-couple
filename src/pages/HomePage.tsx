import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import styles from './HomePage.module.css';

export default function HomePage() {
  const navigate = useNavigate();

  useSEO({
    title: 'MBTI 궁합 테스트',
    description: '무료 MBTI 성격 유형 검사와 연인 궁합 테스트! 20문항으로 나의 MBTI를 알아보고, 16가지 유형별 궁합과 연애 팁을 확인하세요.'
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
          <span className={styles.emoji} style={{ animationDelay: '0s' }}>💕</span>
          <span className={styles.emoji} style={{ animationDelay: '0.5s' }}>✨</span>
          <span className={styles.emoji} style={{ animationDelay: '1s' }}>💫</span>
          <span className={styles.emoji} style={{ animationDelay: '1.5s' }}>🌸</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleHighlight}>MBTI</span> 궁합 테스트
        </h1>

        <p className={styles.subtitle}>
          나의 MBTI를 알아보고<br />
          연인과의 궁합을 확인해보세요!
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📝</span>
            <span className={styles.featureText}>20문항 검사</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>💑</span>
            <span className={styles.featureText}>커플 궁합</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>💡</span>
            <span className={styles.featureText}>연애 팁</span>
          </div>
        </div>

        <motion.button
          className={styles.startButton}
          onClick={() => navigate('/test')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          테스트 시작하기 💖
        </motion.button>

        <motion.button
          className={styles.compatibilityButton}
          onClick={() => navigate('/compatibility')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          MBTI 알고 있다면? 궁합 바로 보기 →
        </motion.button>
      </motion.div>

      <div className={styles.decoration}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
    </div>
  );
}
