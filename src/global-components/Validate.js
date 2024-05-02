export const validateTextField = (value, type) => {
  if (value && value.length !== 0) {
    if (type === 'email') {
      // Email validation using a regular expression
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailPattern.test(value);
    } else if (type === 'number') {
      return !isNaN(value);
    } else if (type === 'text') {
      return value.length >= 8 && value.length <= 16; 
    } else { 
      return true;
    }
  }
};
