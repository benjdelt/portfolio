import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { useLanguageSwitcher } from '../hooks/useLanguageSwitcher';
import Social from '../components/Social';
import styles from '../styles/components/Footer.module.css';

export default function Footer() {

  const { t } = useTranslation('nav');

  const { switchFr, switchEn } = useLanguageSwitcher();

  return (
    <footer className={styles.footer}>
        <ul className={styles.nav}>
          <li>
            <Link href="/">
              { t('presentation') }
            </Link>&nbsp;
          </li>
          <FontAwesomeIcon icon={faCircle} className={styles.separator} />&nbsp;
          {/* <li>
            <Link href="/services">
              { t('services') }
            </Link>&nbsp;
          </li>
          <FontAwesomeIcon icon={faCircle} className={styles.separator} />&nbsp; */}
          <li>
            <Link href="/contact">
              { t('contact') }
            </Link>
          </li>
        </ul>
        <ul className={styles.language}>
          <li>
            <button onClick={() => switchFr()}>
              Français
            </button>
          </li>
            <FontAwesomeIcon icon={faCircle} className={styles.separator} />&nbsp;
          <li>
            <button onClick={() => switchEn()}>
              English
            </button>
          </li>
        </ul>
        {/* <ul className={styles.social}>
          <li>
            <a href="https://linkedin.com/in/benjdelt" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/benjdelt" target="_blank" rel="noopener noreferrer" title="Github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul> */}
        <div className={styles.social}>
          <Social />
        </div>
        <p>TVA BE 0779 744 990</p>
      </footer>
  );
}
