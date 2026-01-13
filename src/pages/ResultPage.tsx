import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mbtiTypes } from '../data/mbtiTypes';
import { getBestMatches } from '../data/compatibility';
import { useSEO } from '../hooks/useSEO';
import KakaoShareButton from '../components/KakaoShareButton';
import styles from './ResultPage.module.css';

export default function ResultPage() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  const mbtiType = mbtiTypes[type || ''] || mbtiTypes.INFP;
  const bestMatches = getBestMatches(type || 'INFP');

  useSEO({
    title: `${mbtiType.type} ${mbtiType.title}`,
    description: `${mbtiType.type} 성격 유형 분석과 연애 스타일, 베스트 궁합을 확인하세요. ${mbtiType.description}`
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
        <h1 className={styles.title}>당신의 MBTI는</h1>
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
        <div className={styles.typeTitle}>{mbtiType.title}</div>
        <p className={styles.typeDescription}>{mbtiType.description}</p>
      </motion.div>

      <motion.div
        className={styles.detailsCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>✨</span> 강점
          </h3>
          <div className={styles.tagList}>
            {mbtiType.strengths.map((strength, index) => (
              <span key={index} className={styles.tag} style={{ backgroundColor: `${mbtiType.color}20`, color: mbtiType.color }}>
                {strength}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>💭</span> 약점
          </h3>
          <div className={styles.tagList}>
            {mbtiType.weaknesses.map((weakness, index) => (
              <span key={index} className={styles.tagWeak}>
                {weakness}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>💕</span> 연애 스타일
          </h3>
          <p className={styles.loveStyle}>{mbtiType.loveStyle}</p>
        </div>
      </motion.div>

      <motion.div
        className={styles.matchCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className={styles.matchTitle}>
          <span className={styles.sectionIcon}>💑</span> 베스트 궁합 TOP 3
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
                    <span className={styles.matchTypeTitle}>{matchType.title}</span>
                  </div>
                  <div className={styles.matchScore}>
                    {getScoreStars(match.compatibility.score)}
                  </div>
                  <div className={styles.matchDesc}>{match.compatibility.title}</div>
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
        <h3 className={styles.shareTitle}>결과 공유하기</h3>
        <KakaoShareButton
          title={`나의 MBTI는 ${mbtiType.type} (${mbtiType.title})!`}
          description={`${mbtiType.description} 나도 MBTI 궁합 테스트 해보기!`}
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
          궁합 더 알아보기 💕
        </button>
        <button
          className={styles.secondaryButton}
          onClick={() => navigate('/test')}
        >
          다시 테스트하기
        </button>
        <button
          className={styles.homeButton}
          onClick={() => navigate('/')}
        >
          홈으로
        </button>
      </motion.div>
    </div>
  );
}
