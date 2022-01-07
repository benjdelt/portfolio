import { useState, useEffect } from 'react';

function ControlledTextInput({ name, label, required, getError, errorFields, setErrorFields }) {

  const asterisk = required ? '*' : '';

  getError = getError || (() => '');

  const [error, setError] = useState(getError(''));
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    if (setErrorFields) {
      setErrorFields({...errorFields, [name]: error});
    }
  }, [error])

  return (
    <div>
      <label htmlFor={name}>{`${label} ${asterisk}`} <span>{blurred && error}</span></label>
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
