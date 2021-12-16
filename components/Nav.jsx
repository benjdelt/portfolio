import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Nav.module.css';

function Nav() {

  const languageLabels = {fr: "Français", en: "English"};

  const { t, i18n } = useTranslation();
  const switchValue = i18n.language === "en" ? "fr" : "en";

  return (
    <nav  className={styles.navBar}>
      <ul>
        <li><Link href="/">{ t('nav.presentation') }</Link></li>
        <li><Link href="/services">{ t('nav.services') }</Link></li>
        <li><Link href="/contact">{ t('nav.contact') }</Link></li>
        <li>
          <button className={styles.language} onClick={() => i18n.changeLanguage(switchValue)}>
            {languageLabels[switchValue]}
          </button>
        </li>
      </ul>
    </nav>  
  )
}

export default Nav;