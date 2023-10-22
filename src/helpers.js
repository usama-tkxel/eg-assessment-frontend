export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function validateEmail(email = '') {
  if (email.trim() === '') {
    return false; // Empty email
  }
  return EMAIL_PATTERN.test(email);
}

export function validateNameStringLength(name = '') {
  if (name.trim() === '') {
    return false; // Empty name
  }

  return name?.length < 125;
}


export function validatePassword(password = '') {
  if (password.trim() === '') {
    return false; // Empty password
  }
  return PASSWORD_PATTERN.test(password);
}

