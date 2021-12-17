import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import Article from '../components/Article';
import styles from '../styles/Home.module.css';

import './i18n';


export default function Home() {

  const { t } = useTranslation();

  return (
    <div>
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
        <div className={styles.sectionContent}>
          <h2>{ t('home.aboutHeader') }</h2>
          <div className={styles.about}>
            <p>{ t('home.aboutText') }</p>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.even}`}>
        <div className={styles.sectionContent}>
          <h2>{ t('home.experienceHeader') }</h2>
          <Article 
            image="/tmp.png"
            title="Talent Marketplace"
            text={ t('home.tmpText') }
          />
        </div>
      </section>
      <footer className={styles.odd}>

      </footer>
    </div>
  )
}
