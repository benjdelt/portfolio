import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/Footer.module.css';

function Footer() {

  const { t, i18n } = useTranslation();

  return (
    <footer className={styles.footer}>
        <ul>
          <li>
            <Link href="/">
              { t('nav.presentation') }
            </Link>&nbsp;
          </li>
          <FontAwesomeIcon icon={faCircle} className={styles.separator} />&nbsp;
          <li>
            <Link href="/services">
              { t('nav.services') }
            </Link>&nbsp;
          </li>
          <FontAwesomeIcon icon={faCircle} className={styles.separator} />&nbsp;
          <li>
            <Link href="/contact">
              { t('nav.contact') }
            </Link>
          </li>
        </ul>
        <ul className={styles.language}>
          <li>
            <button onClick={() => i18n.changeLanguage('fr')}>
              Français
            </button>
          </li>
            <FontAwesomeIcon icon={faCircle} className={styles.separator} />&nbsp;
          <li>
            <button  onClick={() => i18n.changeLanguage('en')}>
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

export default Footer;
