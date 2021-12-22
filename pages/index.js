import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Section from '../components/Section';
import Article from '../components/Article';
import styles from '../styles/Home.module.css';


export default function Home() {

  const { t } = useTranslation('common');

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerImg}>
          <img src="me.jpg" alt="Photo of Benjamin Deltenre"/>
        </div>
        <div className={styles.headerText}>
          <h1>Benjamin Deltenre</h1>
          <h3>{ t('headerTag') }</h3>
        </div>
      </header>
      <Section>
        <h2>{ t('aboutHeader') }</h2>
        <div className={styles.about}>
          <p>{ t('aboutText') }</p>
        </div>
      </Section>
      <Section background>
        <h2>{ t('experienceHeader') }</h2>
        <Article 
          image="/tmp.png"
          title="Talent Marketplace"
          text={ t('tmpText') }
        />
      </Section>
    </div>
  )
}

export async function getStaticProps(context) {
  let localisation = {};
  if (context.locale) {
    localisation = await serverSideTranslations(context.locale, ['common', 'nav']);
  }

  return {
    props: {
      ...localisation,
    },
  };
}
