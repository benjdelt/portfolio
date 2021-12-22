import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/Footer.module.css';

export default function Footer() {

  // Using the router hook to switch locale without changing the current page
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { t } = useTranslation('nav');

  return (
    <footer className={styles.footer}>
        <ul className={styles.nav}>
          <li>
            <Link href="/">
              { t('presentation') }
            </Link>&nbsp;
          </li>
          <FontAwesomeIcon icon={faCircle} className={styles.separator} />&nbsp;
          <li>
            <Link href="/services">
              { t('services') }
            </Link>&nbsp;
          </li>
          <FontAwesomeIcon icon={faCircle} className={styles.separator} />&nbsp;
          <li>
            <Link href="/contact">
              { t('contact') }
            </Link>
          </li>
        </ul>
        <ul className={styles.language}>
          <li>
            <button onClick={() => router.push({ pathname, query }, asPath, { locale: 'fr' })}>
              Français
            </button>
          </li>
            <FontAwesomeIcon icon={faCircle} className={styles.separator} />&nbsp;
          <li>
            <button onClick={() => router.push({ pathname, query }, asPath, { locale: 'en' })}>
              English
            </button>
          </li>
        </ul>
        <ul className={styles.social}>
          <li>
            <a href="https://github.com/benjdelt" target="_blank" rel="noopener noreferrer" title="Github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/benjdelt" target="_blank" rel="noopener noreferrer" title="Github">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </footer>
  );
}
