import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

export default function Contact() {

  const { t } = useTranslation('contact');

  return (
    <Section background>
      <h1>{t('contact')}</h1>
      <ContactForm />
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

