import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Section from '../components/Section';

export default function Services() {

  const { t } = useTranslation('services');

  return (
    <Section background>
      <h1>{t('services')}</h1>
      <p>{t('soon')}</p>
    </Section>
  )
}

export async function getStaticProps(context) {
  let localisation = {};
  if (context.locale) {
    localisation = await serverSideTranslations(context.locale, ['nav', 'services']);
  }

  return {
    props: {
      ...localisation,
    },
  };
}
