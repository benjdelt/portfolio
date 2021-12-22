import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Section from '../components/Section';

export default function Contact() {
  return (
    <Section background>
      <h1>Contact</h1>
      <p>Coming soon...</p>
    </Section>
  )
}

export async function getStaticProps(context) {
  let localisation = {};
  if (context.locale) {
    localisation = await serverSideTranslations(context.locale, ['nav']);
  }

  return {
    props: {
      ...localisation,
    },
  };
}

