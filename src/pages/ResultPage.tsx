import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { mbtiTypes } from '../data/mbtiTypes';
import { getBestMatches } from '../data/compatibility';
import { useSEO } from '../hooks/useSEO';
import KakaoShareButton from '../components/KakaoShareButton';
import styles from './ResultPage.module.css';

export default function ResultPage() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const mbtiType = mbtiTypes[type || ''] || mbtiTypes.INFP;
  const bestMatches = getBestMatches(type || 'INFP');

  useSEO({
    title: `${mbtiType.type} ${t(`mbtiTypes.${mbtiType.type}.title`)}`,
    description: t('result.seoDescription', { type: mbtiType.type, description: t(`mbtiTypes.${mbtiType.type}.description`) })
  });

  const getScoreStars = (score: number) => {
    return '💖'.repeat(score) + '🤍'.repeat(5 - score);
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>{t('result.yourMbtiIs')}</h1>
      </motion.div>

      <motion.div
        className={styles.resultCard}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.typeEmoji}>{mbtiType.emoji}</div>
        <div
          className={styles.typeCode}
          style={{ color: mbtiType.color }}
        >
          {mbtiType.type}
        </div>
        <div className={styles.typeTitle}>{t(`mbtiTypes.${mbtiType.type}.title`)}</div>
        <p className={styles.typeDescription}>{t(`mbtiTypes.${mbtiType.type}.description`)}</p>
      </motion.div>

      <motion.div
        className={styles.detailsCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>✨</span> {t('result.strengths')}
          </h3>
          <div className={styles.tagList}>
            {(t(`mbtiTypes.${mbtiType.type}.strengths`, { returnObjects: true }) as string[]).map((strength, index) => (
              <span key={index} className={styles.tag} style={{ backgroundColor: `${mbtiType.color}20`, color: mbtiType.color }}>
                {strength}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>💭</span> {t('result.weaknesses')}
          </h3>
          <div className={styles.tagList}>
            {(t(`mbtiTypes.${mbtiType.type}.weaknesses`, { returnObjects: true }) as string[]).map((weakness, index) => (
              <span key={index} className={styles.tagWeak}>
                {weakness}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>💕</span> {t('result.loveStyle')}
          </h3>
          <p className={styles.loveStyle}>{t(`mbtiTypes.${mbtiType.type}.loveStyle`)}</p>
        </div>
      </motion.div>

      <motion.div
        className={styles.matchCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className={styles.matchTitle}>
          <span className={styles.sectionIcon}>💑</span> {t('result.bestMatchesTitle')}
        </h3>

        <div className={styles.matchList}>
          {bestMatches.map((match, index) => {
            const matchType = mbtiTypes[match.type];
            return (
              <motion.div
                key={match.type}
                className={styles.matchItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                onClick={() => navigate(`/compatibility?type1=${type}&type2=${match.type}`)}
              >
                <div className={styles.matchRank}>{index + 1}</div>
                <div className={styles.matchInfo}>
                  <div className={styles.matchType}>
                    <span className={styles.matchEmoji}>{matchType.emoji}</span>
                    <span style={{ color: matchType.color, fontWeight: 700 }}>{match.type}</span>
                    <span className={styles.matchTypeTitle}>{t(`mbtiTypes.${match.type}.title`)}</span>
                  </div>
                  <div className={styles.matchScore}>
                    {getScoreStars(match.compatibility.score)}
                  </div>
                  <div className={styles.matchDesc}>{t(`compatibilityData.${type}.${match.type}.title`)}</div>
                </div>
                <span className={styles.matchArrow}>→</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className={styles.shareSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className={styles.shareTitle}>{t('result.shareResult')}</h3>
        <KakaoShareButton
          title={t('result.shareTitle', { type: mbtiType.type, title: t(`mbtiTypes.${mbtiType.type}.title`) })}
          description={t('result.shareDescription', { description: t(`mbtiTypes.${mbtiType.type}.description`) })}
        />
      </motion.div>

      <motion.div
        className={styles.actions}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          className={styles.primaryButton}
          onClick={() => navigate(`/compatibility?type1=${type}`)}
        >
          {t('result.moreCompatibility')}
        </button>
        <button
          className={styles.secondaryButton}
          onClick={() => navigate('/test')}
        >
          {t('result.retakeTest')}
        </button>
        <button
          className={styles.homeButton}
          onClick={() => navigate('/')}
        >
          {t('common.home')}
        </button>
      </motion.div>
    </div>
  );
}
