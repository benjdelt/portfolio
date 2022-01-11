import Image from 'next/image';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Social from '../components/Social';
import Section from '../components/Section';
import Article from '../components/Article';
import LinkText from '../components/LinkText';

import ReactLogo from '../components/icons/ReactLogo';
import DjangoLogo from '../components/icons/DjangoLogo';
import NextLogo from '../components/icons/NextLogo';

import styles from '../styles/pages/Home.module.css';


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
          <Social />
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
                <a href="https://www.talentmarketplace.ca/" target="_blank" rel="noopener noreferrer" key="tmp"/>,
                <a href="https://www.linkedin.com/in/benjdelt/" target="_blank" rel="noopener noreferrer" key="linkedin"/>,
                <a href="mailto:benjdelt@gmail.com" target="_blank" rel="noopener noreferrer" key="email"/>,
                <LinkText href="/contact" key="contact"/>
              ]}
            />
          </p>
        </div>
      </Section>
      <Section background>
        <h2>{ t('experienceHeader') }</h2>
        <Article 
          image="/talentmarketplace320.png"
          title="Talent Marketplace"
          text={
            <Trans
              i18nKey="tmpText"
              t={t}
              components={[
                <a href="https://www.talentmarketplace.ca/" target="_blank" rel="noopener noreferrer" key="tmp"/>,
              ]}
            />
          }
          icons={[
            <ReactLogo width={30} height={30} key="react"/>,
            <DjangoLogo width={30} height={30} key="django"/>
          ]}
        />
        <Article 
          image="/portfolio320.png"
          title="Portfolio"
          text={ 
            <Trans 
              i18nKey="portfolioText"
              t={t}
              components={[
                <a href="https://github.com/benjdelt/portfolio/" target="_blank" rel="noopener noreferrer" key="portfolio"/>,
              ]}
            />  
          }
          icons={[
            <NextLogo width={30} height={30} key="nextjs"/>,
            <ReactLogo width={30} height={30} key="react"/>
          ]}
          leftSideImg
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
