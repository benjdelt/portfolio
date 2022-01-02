import styles from '../styles/components/ContactForm.module.css';

function ContactForm() {
  return (
    <form action="POST" className={styles.contact}>
      <input type="hidden" name="contact" value="contact" />
      <div>
        <label htmlFor="name">Name *</label>
        <input type="text"/>
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input type="text"/>
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text"/>
      </div>
      <div>
        <label htmlFor="message">Message *</label>
        <textarea cols="50" rows="15"></textarea>
      </div>
      <div className={styles.submit}>
        <button type="submit" disabled>Send</button>
      </div>
    </form>
  );
}

export default ContactForm;
