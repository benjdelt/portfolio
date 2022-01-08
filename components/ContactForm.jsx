import { useState, useEffect } from 'react';
import ControlledTextInput from '../components/ControlledTextInput';
import ControlledTextArea from '../components/ControlledTextArea';
import { getNameError, getEmailError, getMessageError } from '../utils/formValidators';

import styles from '../styles/components/ContactForm.module.css';

function ContactForm({labels, errors}) {

  const [errorFields, setErrorFields] = useState({
    name: getNameError(''),
    email: getEmailError(''),
    message: getMessageError('')
  })

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!(Object.values(errorFields).every(e => !e)));
  }, [errorFields])

  return (
    <form name="contact" method="POST" action="/"  data-netlify="true" className={styles.contact}>
      <input type="hidden" name="contact" value="contact"/>
      <ControlledTextInput name="name" label={labels.name} required={true} getError={getNameError} errorFields={errorFields} setErrorFields={setErrorFields}/>
      <ControlledTextInput name="email" label={labels.email} required={true} getError={getEmailError} errorFields={errorFields} setErrorFields={setErrorFields}/>
      <ControlledTextInput name="subject" label={labels.subject} required={false}/>
      <ControlledTextArea name="message" label={labels.message} required={true} getError={getMessageError} errorFields={errorFields} setErrorFields={setErrorFields}/>
      <div className={styles.submit}>
        <button type="submit" disabled={disabled}>{labels.send}</button>
      </div>
    </form>
  );
}

export default ContactForm;
