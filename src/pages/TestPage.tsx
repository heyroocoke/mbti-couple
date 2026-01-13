import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';
import { useSEO } from '../hooks/useSEO';
import styles from './TestPage.module.css';

export default function TestPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  useSEO({
    title: 'MBTI 검사',
    description: '20문항으로 나의 MBTI 성격 유형을 알아보세요. 간단한 질문에 답하고 E/I, S/N, T/F, J/P 성향을 확인하세요.'
  });

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleAnswer = (value: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));

    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(prev => prev + 1), 300);
    } else {
      // 결과 계산
      const result = calculateResult({ ...answers, [currentQuestion.id]: value });
      navigate(`/result/${result}`);
    }
  };

  const calculateResult = (finalAnswers: Record<number, number>): string => {
    const scores = { EI: 0, SN: 0, TF: 0, JP: 0 };

    questions.forEach(q => {
      const answer = finalAnswers[q.id] || 0;
      const score = answer * q.direction;
      scores[q.dimension] += score;
    });

    const E = scores.EI > 0 ? 'E' : 'I';
    const S = scores.SN > 0 ? 'S' : 'N';
    const T = scores.TF > 0 ? 'T' : 'F';
    const J = scores.JP > 0 ? 'J' : 'P';

    return `${E}${S}${T}${J}`;
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      navigate('/');
    }
  };

  const answerOptions = [
    { value: 2, label: '매우 그렇다', emoji: '😆' },
    { value: 1, label: '그렇다', emoji: '🙂' },
    { value: 0, label: '보통이다', emoji: '😐' },
    { value: -1, label: '아니다', emoji: '🙁' },
    { value: -2, label: '전혀 아니다', emoji: '😣' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={handleBack}>
          ← 이전
        </button>
        <span className={styles.counter}>
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className={styles.progressWrapper}>
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          className={styles.questionCard}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.questionNumber}>Q{currentIndex + 1}</div>
          <h2 className={styles.questionText}>{currentQuestion.text}</h2>

          <div className={styles.options}>
            {answerOptions.map((option) => (
              <motion.button
                key={option.value}
                className={`${styles.optionButton} ${
                  answers[currentQuestion.id] === option.value ? styles.selected : ''
                }`}
                onClick={() => handleAnswer(option.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={styles.optionEmoji}>{option.emoji}</span>
                <span className={styles.optionLabel}>{option.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.decoration}>
        <span className={styles.decoEmoji}>✨</span>
      </div>
    </div>
  );
}
