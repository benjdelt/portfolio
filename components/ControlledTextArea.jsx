import { useState, useEffect } from 'react';

function ControlledTextArea({ name, label, required, errorMessages, getError, errorFields, setErrorFields }) {

  const asterisk = required ? '*' : '';

  getError = getError || (() => '');
  errorMessages = {...errorMessages, noError: ''};
  
  const [error, setError] = useState(getError(''));
  const [errorMessage, setErrorMessage] = useState('');
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    if (setErrorFields) {
      setErrorFields({...errorFields, [name]: error});
    }
    setErrorMessage(errorMessages[error])
  }, [error])

  return (
    <div>
      <label htmlFor={name}>{`${label} ${asterisk}`} <span>{blurred && errorMessage}</span></label>
      <textarea
        cols="50" 
        rows="15"
        name={name}
        onBlur={() => setBlurred(true)}
        onChange={e => setError(getError(e.target.value))}
      >
      </textarea>
    </div>
  );
}

export default ControlledTextArea;