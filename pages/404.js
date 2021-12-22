import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Section from '../components/Section';

export default function NotFound() {

  const { t } = useTranslation('error');

  return (
    <Section background>
      <h1>404</h1>
      <p>{t('pageNotFound')}</p>
    </Section>
  )
}

export async function getStaticProps(context) {
  let localisation = {};
  if (context.locale) {
    localisation = await serverSideTranslations(context.locale, ['nav', 'error']);
  }
  return {
    props: {
      ...localisation,
    },
  };
}
