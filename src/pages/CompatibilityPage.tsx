import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { mbtiTypes } from '../data/mbtiTypes';
import { getCompatibility, getAllCompatibilities } from '../data/compatibility';
import { useSEO } from '../hooks/useSEO';
import styles from './CompatibilityPage.module.css';

const MBTI_TYPES = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

export default function CompatibilityPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [type1, setType1] = useState(searchParams.get('type1') || '');
  const [type2, setType2] = useState(searchParams.get('type2') || '');
  const [showResult, setShowResult] = useState(false);

  useSEO({
    title: 'MBTI 궁합',
    description: 'MBTI 유형별 연인 궁합을 확인하세요. 16가지 성격 유형의 조합별 궁합 점수와 연애 팁을 제공합니다.'
  });

  useEffect(() => {
    if (type1 && type2) {
      setShowResult(true);
    }
  }, []);

  const handleCheck = () => {
    if (type1 && type2) {
      setShowResult(true);
    }
  };

  const compatibility = type1 && type2 ? getCompatibility(type1, type2) : null;
  const type1Info = mbtiTypes[type1];
  const type2Info = mbtiTypes[type2];
  const allMatches = type1 ? getAllCompatibilities(type1) : [];

  const getScoreEmoji = (score: number) => {
    const emojis = ['😢', '🤔', '😊', '💛', '💖'];
    return emojis[score - 1] || '💖';
  };

  const getScoreText = (score: number) => {
    const texts = ['도전적인 관계', '노력이 필요해요', '괜찮은 궁합', '좋은 궁합', '천생연분'];
    return texts[score - 1] || '천생연분';
  };

  const getScoreColor = (score: number) => {
    const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#ff6b9d'];
    return colors[score - 1] || '#ff6b9d';
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button className={styles.backButton} onClick={() => navigate('/')}>
          ← 홈으로
        </button>
        <h1 className={styles.title}>💑 MBTI 궁합 보기</h1>
      </motion.div>

      <motion.div
        className={styles.selectorCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className={styles.selectorRow}>
          <div className={styles.selectorGroup}>
            <label className={styles.label}>나의 MBTI</label>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={type1}
                onChange={(e) => {
                  setType1(e.target.value);
                  setShowResult(false);
                }}
              >
                <option value="">선택하세요</option>
                {MBTI_TYPES.map(type => (
                  <option key={type} value={type}>
                    {mbtiTypes[type].emoji} {type} - {mbtiTypes[type].title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.heart}>💕</div>

          <div className={styles.selectorGroup}>
            <label className={styles.label}>상대방 MBTI</label>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={type2}
                onChange={(e) => {
                  setType2(e.target.value);
                  setShowResult(false);
                }}
              >
                <option value="">선택하세요</option>
                {MBTI_TYPES.map(type => (
                  <option key={type} value={type}>
                    {mbtiTypes[type].emoji} {type} - {mbtiTypes[type].title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <motion.button
          className={styles.checkButton}
          onClick={handleCheck}
          disabled={!type1 || !type2}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          궁합 확인하기 ✨
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        {showResult && compatibility && type1Info && type2Info && (
          <motion.div
            key={`${type1}-${type2}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.resultCard}>
              <div className={styles.coupleDisplay}>
                <div className={styles.personCard}>
                  <span className={styles.personEmoji}>{type1Info.emoji}</span>
                  <span className={styles.personType} style={{ color: type1Info.color }}>{type1}</span>
                  <span className={styles.personTitle}>{type1Info.title}</span>
                </div>

                <div className={styles.scoreDisplay}>
                  <div className={styles.scoreEmoji}>{getScoreEmoji(compatibility.score)}</div>
                  <div className={styles.scoreStars}>
                    {'💖'.repeat(compatibility.score)}{'🤍'.repeat(5 - compatibility.score)}
                  </div>
                  <div
                    className={styles.scoreText}
                    style={{ color: getScoreColor(compatibility.score) }}
                  >
                    {getScoreText(compatibility.score)}
                  </div>
                </div>

                <div className={styles.personCard}>
                  <span className={styles.personEmoji}>{type2Info.emoji}</span>
                  <span className={styles.personType} style={{ color: type2Info.color }}>{type2}</span>
                  <span className={styles.personTitle}>{type2Info.title}</span>
                </div>
              </div>

              <div className={styles.compatibilityTitle}>{compatibility.title}</div>
              <p className={styles.compatibilityDesc}>{compatibility.description}</p>

              <div className={styles.tipsSection}>
                <h3 className={styles.tipsTitle}>💡 연애 팁</h3>
                <ul className={styles.tipsList}>
                  {compatibility.tips.map((tip, index) => (
                    <li key={index} className={styles.tipItem}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {type1 && !showResult && (
        <motion.div
          className={styles.allMatchesCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className={styles.allMatchesTitle}>
            <span>{type1Info?.emoji}</span> {type1}의 모든 궁합
          </h3>

          <div className={styles.matchesGrid}>
            {allMatches.map(({ type, compatibility }) => {
              const matchInfo = mbtiTypes[type];
              return (
                <motion.button
                  key={type}
                  className={styles.matchGridItem}
                  onClick={() => {
                    setType2(type);
                    setTimeout(() => setShowResult(true), 100);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.matchGridEmoji}>{matchInfo.emoji}</span>
                  <span className={styles.matchGridType} style={{ color: matchInfo.color }}>{type}</span>
                  <span className={styles.matchGridScore}>
                    {'💖'.repeat(compatibility.score)}{'🤍'.repeat(5 - compatibility.score)}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}

      <div className={styles.footer}>
        <button className={styles.testButton} onClick={() => navigate('/test')}>
          MBTI 모른다면? 테스트하기 →
        </button>
      </div>
    </div>
  );
}
