export const getNameError = name => {
  if(!name.trim()){
    return 'required';
  } 
  if(!/[^0-9]+/.test(name)){
    return 'alphabeticalError';
  } 
  if(!/^[a-zA-Z ,.'-éèêë]{2,30}$/.test(name)) {
    return 'nameLengthError';
  }
    return 'noError';
}

export const getEmailError = email => {
  const trimmed = email.trim();
  if(!trimmed){
    return 'required';
  } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(trimmed)){
    return 'emailFormatError';
  }
  return 'noError';
}

export const getMessageError = message => {
  if(!message.trim()){
    return 'required';
  }
  return 'noError';
}
