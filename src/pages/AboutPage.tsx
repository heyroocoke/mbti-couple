import { useTranslation } from 'react-i18next';
import { useSEO } from '../hooks/useSEO';
import styles from './PrivacyPolicyPage.module.css';

export default function AboutPage() {
  const { t } = useTranslation();

  useSEO({
    title: t('about.seoTitle'),
    description: t('about.seoDescription')
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('about.title')}</h1>
        <p className={styles.date}>{t('about.subtitle')}</p>

        <section className={styles.section}>
          <h2>{t('about.section1Title')}</h2>
          <p>{t('about.section1Content')}</p>
        </section>

        <section className={styles.section}>
          <h2>{t('about.section2Title')}</h2>
          <p>{t('about.section2Content')}</p>
          <ul>
            <li>{t('about.feature1')}</li>
            <li>{t('about.feature2')}</li>
            <li>{t('about.feature3')}</li>
            <li>{t('about.feature4')}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{t('about.section3Title')}</h2>
          <p>{t('about.section3Content')}</p>
        </section>

        <section className={styles.section}>
          <h2>{t('about.section4Title')}</h2>
          <p>{t('about.section4Content')}</p>
          <ul>
            <li>{t('about.contactEmail')}: contact@mbticouple.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
