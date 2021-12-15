import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Nav.module.css';

function Nav() {

  const { t, i18n } = useTranslation();

  return (
    <nav  className={styles.navBar}>
      <ul>
        <li><Link href="/">{ t('nav.presentation') }</Link></li>
        <li><Link href="/services">{ t('nav.services') }</Link></li>
        <li><Link href="/contact">{ t('nav.contact') }</Link></li>
        <li><button onClick={() => i18n.changeLanguage("en")}>En</button></li>
        <li><button onClick={() => i18n.changeLanguage("fr")}>Fr</button></li>
      </ul>
    </nav>  
  )
}

export default Nav;