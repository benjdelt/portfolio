import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Section from '../components/Section';
import Article from '../components/Article';
import LinkText from '../components/LinkText';

import styles from '../styles/Home.module.css';


export default function Home() {

  const { t } = useTranslation('common');

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerImg}>
          <Image src="/site-header.jpg" alt="Photo of Benjamin Deltenre" height={240} width={240}/>
        </div>
        <div className={styles.headerText}>
          <h1>Benjamin Deltenre</h1>
          <h3>{ t('headerTag') }</h3>
        </div>
      </header>
      <Section>
        <h2>{ t('aboutHeader') }</h2>
        <div className={styles.about}>
          <p>
            <Trans
              i18nKey="aboutText"
              t={t}
              components={[
                <a href="https://www.talentmarketplace.ca/" target="_blank" rel="noopener noreferrer"/>,
                <a href="https://www.linkedin.com/in/benjdelt/" target="_blank" rel="noopener noreferrer"/>,
                <a href="mailto:benjdelt@gmail.com" target="_blank" rel="noopener noreferrer"/>,
                <LinkText href="/contact"/>
              ]}
            />
          </p>
        </div>
      </Section>
      <Section background>
        <h2>{ t('experienceHeader') }</h2>
        <Article 
          image="/tmp.png"
          title="Talent Marketplace"
          text={
            <Trans
              i18nKey="tmpText"
              t={t}
              components={[
                <a href="https://www.talentmarketplace.ca/" target="_blank" rel="noopener noreferrer"/>,
              ]}
            />
          }
        />
        {/* <Article 
          image="/tmp.png"
          title="Talent Marketplace"
          text={ t('tmpText') }
          leftSideImg
        /> */}
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
