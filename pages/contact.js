import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

export default function Contact() {

  const { t } = useTranslation('contact');

  const labels = {name: t('name'), email: t('email'), subject: t('subject'), message: t('message'), send: t('send')};
  const errors = {required: t('required'), alphabeticalError: t('alphabeticalError'), nameLengthError: t('nameLengthError'), emailFormatError: t('emailFormatError')};

  return (
    <Section background>
      <h1>{t('contact')}</h1>
      <ContactForm labels={labels} errors={errors}/>
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

