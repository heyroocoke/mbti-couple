import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          <Link to="/privacy" className={styles.link}>개인정보처리방침</Link>
          <span className={styles.divider}>|</span>
          <Link to="/terms" className={styles.link}>이용약관</Link>
        </div>
        <p className={styles.copyright}>
          Made with 💕 by <span className={styles.author}>Jang Eun Su</span>
        </p>
        <p className={styles.year}>© 2026 MBTI 궁합 테스트</p>
      </div>
    </footer>
  );
}
