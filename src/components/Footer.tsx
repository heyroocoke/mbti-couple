import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          <Link to="/about" className={styles.link}>{t('common.about')}</Link>
          <span className={styles.divider}>|</span>
          <Link to="/privacy" className={styles.link}>{t('common.privacyPolicy')}</Link>
          <span className={styles.divider}>|</span>
          <Link to="/terms" className={styles.link}>{t('common.terms')}</Link>
          <span className={styles.divider}>|</span>
          <a href="mailto:contact@mbticouple.com" className={styles.link}>{t('common.contact')}</a>
        </div>
        <p className={styles.copyright}>
          © 2026 Chaneug. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
