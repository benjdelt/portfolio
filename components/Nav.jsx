import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Nav.module.css';

function Nav() {

  // Using the router hook to switch locale without changing the current page
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  
  const { t } = useTranslation('nav');
  const switchValue = locale === "en" ? "fr" : "en";
  const languageLabels = {fr: "Français", en: "English"};

  const wrapperRef = useRef(null);
  const [isMobileOpen, setMobileOpen] = useState(false);

  const isMobileOpenStyles = isMobileOpen ? styles.mobileOpen : styles.mobileClosed;

  const handleClickOutside = event => {
    // Close menu when click outside
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [])

  const handleClick = event => {
    event.stopPropagation(); // Prevents closing menu as soon as it opens
    setMobileOpen(!isMobileOpen);
  };


  return (
    <nav  className={styles.navBar}>
      <div className={styles.buttonContainer}>
        <button className={styles.mobileButton} onClick={handleClick} >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <ul className={`${styles.menu} ${isMobileOpenStyles}`} onClick={() => setMobileOpen(false)} ref={wrapperRef}>
        <li><Link href="/">{ t('presentation') }</Link></li>
        <li><Link href="/services">{ t('services') }</Link></li>
        <li><Link href="/contact">{ t('contact') }</Link></li>
        <li>
          <button className={styles.language} onClick={() => router.push({ pathname, query }, asPath, { locale: switchValue })}>
            {languageLabels[switchValue]}
          </button>
        </li>
      </ul>
    </nav>  
  )
}

export default Nav;