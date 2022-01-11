import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Section from '../components/Section';

export default function Contact() {

  const router = useRouter();
  const { pathname, query, asPath, locale } = router;

  const { t } = useTranslation('contact');

  return (
    <Section background>
      <h1>{t('contact')}</h1>
      <p>{t('messageSent')}</p>
      <p><Link href="/">{t('backToMainPage')}</Link></p>
    </Section>
  )
}

export async function getStaticProps(context) {
  let localisation = {};
  if (context.locale) {
    localisation = await serverSideTranslations(context.locale, ['nav', 'contact']);
  }

  return {
    props: {
      ...localisation,
    },
  };
}

