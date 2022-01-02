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
      {/* <form action="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div className="name">
          <label htmlFor="name">Name *</label>
          <input type="text"/>
        </div>
        <div className="email">
          <label htmlFor="email">Email *</label>
          <input type="text"/>
        </div>
        <div className="subject">
          <label htmlFor="subject">Subject</label>
          <input type="text"/>
        </div>
        <div className="message">
          <label htmlFor="message">Message *</label>
          <textarea cols="50" rows="15"></textarea>
        </div>
        <div className="submit">
          <button type="submit">Send</button>
        </div>
      </form> */}
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

