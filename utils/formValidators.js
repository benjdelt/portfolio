export const getNameError = name => {
  if(!name.trim()){
    return 'Required';
  } 
  if(!/[^0-9]+/.test(name)){
    return 'Please use alphabetical characters';
  } 
  if(!/^[a-zA-Z ,.'-]{2,30}$/.test(name)) {
    return 'Name must contain between 2 and 30 characters';
  }
    return '';
}

export const getEmailError = email => {
  const trimmed = email.trim();
  if(!trimmed){
    return 'Required';
  } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(trimmed)){
    return 'Requires the format: clever@email.com';
  }
  return '';
}

export const getMessageError = message => {
  if(!message.trim()){
    return 'Required';
  }
  return '';
}
