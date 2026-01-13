import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          Made with 💕 by <span className={styles.author}>Jang Eun Su</span>
        </p>
        <p className={styles.year}>© 2026 MBTI 궁합 테스트</p>
      </div>
    </footer>
  );
}
