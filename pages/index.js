import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'react-i18next';
// import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';

import './i18n';


export default function Home() {

  const { t } = useTranslation();

  return (
    <div>
      {/* <Nav /> */}
      <header className={styles.header}>
        <div className={styles.headerImg}>
          <img src="me.jpg" alt="Photo of Benjamin Deltenre"/>
        </div>
        <div className={styles.headerText}>
          <h1>Benjamin Deltenre</h1>
          <h3>{ t('home.headerTag') }</h3>
        </div>
      </header>
      <section className={`${styles.section} ${styles.odd}`}>
        <div className={styles.sectionText}>
          <h2>{ t('home.aboutHeader') }</h2>
          <p>{ t('home.aboutText') }</p>
        </div>
      </section>
      <section className={`${styles.section} ${styles.even}`}>
        <div className={styles.sectionText}>
          <h2>{ t('home.experienceHeader') }</h2>
          <h4>Talent Marketplace</h4>
          <p>{ t('home.experienceText') }</p>
        </div>
        <img src="/tmp.png" alt="Talent Marketplace"/>
      </section>
      <footer className={styles.odd}>

      </footer>
    </div>
  )
}
