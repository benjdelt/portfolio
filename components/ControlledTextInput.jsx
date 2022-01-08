import { useState, useEffect } from 'react';

function ControlledTextInput({ name, label, errorMessages, required, getError, errorFields, setErrorFields }) {

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
      <input 
        type="text" 
        name={name} 
        onBlur={() => setBlurred(true)}
        onChange={e => setError(getError(e.target.value))}
      />
    </div>
  );
}

export default ControlledTextInput;
