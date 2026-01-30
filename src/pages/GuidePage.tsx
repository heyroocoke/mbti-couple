import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { mbtiTypes } from '../data/mbtiTypes';
import { useSEO } from '../hooks/useSEO';
import styles from './GuidePage.module.css';

const MBTI_GROUPS = [
  { name: 'analysts', types: ['INTJ', 'INTP', 'ENTJ', 'ENTP'] },
  { name: 'diplomats', types: ['INFJ', 'INFP', 'ENFJ', 'ENFP'] },
  { name: 'sentinels', types: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'] },
  { name: 'explorers', types: ['ISTP', 'ISFP', 'ESTP', 'ESFP'] },
];

export default function GuidePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useSEO({
    title: t('guide.seoTitle'),
    description: t('guide.seoDescription')
  });

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button className={styles.backButton} onClick={() => navigate('/')}>
          ← {t('common.home')}
        </button>
        <h1 className={styles.title}>{t('guide.title')}</h1>
        <p className={styles.subtitle}>{t('guide.subtitle')}</p>
      </motion.div>

      {/* MBTI 소개 */}
      <motion.section
        className={styles.introSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className={styles.sectionTitle}>{t('guide.introTitle')}</h2>
        <p className={styles.introText}>{t('guide.introText1')}</p>
        <p className={styles.introText}>{t('guide.introText2')}</p>
      </motion.section>

      {/* 4가지 선호 지표 */}
      <motion.section
        className={styles.dimensionsSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className={styles.sectionTitle}>{t('guide.dimensionsTitle')}</h2>
        <div className={styles.dimensionsList}>
          <div className={styles.dimensionCard}>
            <div className={styles.dimensionHeader}>
              <span className={styles.dimensionLabel}>E / I</span>
              <span className={styles.dimensionName}>{t('guide.dimension1Name')}</span>
            </div>
            <p className={styles.dimensionDesc}>{t('guide.dimension1Desc')}</p>
          </div>
          <div className={styles.dimensionCard}>
            <div className={styles.dimensionHeader}>
              <span className={styles.dimensionLabel}>S / N</span>
              <span className={styles.dimensionName}>{t('guide.dimension2Name')}</span>
            </div>
            <p className={styles.dimensionDesc}>{t('guide.dimension2Desc')}</p>
          </div>
          <div className={styles.dimensionCard}>
            <div className={styles.dimensionHeader}>
              <span className={styles.dimensionLabel}>T / F</span>
              <span className={styles.dimensionName}>{t('guide.dimension3Name')}</span>
            </div>
            <p className={styles.dimensionDesc}>{t('guide.dimension3Desc')}</p>
          </div>
          <div className={styles.dimensionCard}>
            <div className={styles.dimensionHeader}>
              <span className={styles.dimensionLabel}>J / P</span>
              <span className={styles.dimensionName}>{t('guide.dimension4Name')}</span>
            </div>
            <p className={styles.dimensionDesc}>{t('guide.dimension4Desc')}</p>
          </div>
        </div>
      </motion.section>

      {/* 16가지 유형 */}
      {MBTI_GROUPS.map((group, groupIndex) => (
        <motion.section
          key={group.name}
          className={styles.typeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + groupIndex * 0.1 }}
        >
          <h2 className={styles.groupTitle}>{t(`guide.group_${group.name}`)}</h2>
          <div className={styles.typeGrid}>
            {group.types.map((type) => {
              const typeInfo = mbtiTypes[type];
              return (
                <motion.div
                  key={type}
                  className={styles.typeCard}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => navigate(`/result/${type}`)}
                >
                  <div className={styles.typeEmoji}>{typeInfo.emoji}</div>
                  <div className={styles.typeCode} style={{ color: typeInfo.color }}>
                    {type}
                  </div>
                  <div className={styles.typeTitle}>{t(`mbtiTypes.${type}.title`)}</div>
                  <p className={styles.typeDesc}>{t(`mbtiTypes.${type}.description`)}</p>
                  <div className={styles.typeStrengths}>
                    {(t(`mbtiTypes.${type}.strengths`, { returnObjects: true }) as string[]).slice(0, 3).map((strength, i) => (
                      <span key={i} className={styles.strengthTag} style={{ backgroundColor: `${typeInfo.color}20`, color: typeInfo.color }}>
                        {strength}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      ))}

      {/* CTA */}
      <motion.div
        className={styles.ctaSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className={styles.ctaTitle}>{t('guide.ctaTitle')}</h3>
        <p className={styles.ctaText}>{t('guide.ctaText')}</p>
        <button className={styles.ctaButton} onClick={() => navigate('/test')}>
          {t('guide.ctaButton')}
        </button>
      </motion.div>
    </div>
  );
}
