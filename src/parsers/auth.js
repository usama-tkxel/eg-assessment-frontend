// eslint-disable-next-line import/prefer-default-export
export const authParser = (response = {}) => {
  const { token = '', user = {} } = response?.data ?? {};

  localStorage.setItem('authToken', token);
  const DEFAULT_USER = {
    superAdmin: false,
  };

  const updatedUser = {
    ...DEFAULT_USER,
    user,
    authenticated: false,
  };

  if (user.email) {
    return { ...updatedUser, authenticated: true };
  }
  return { ...updatedUser, ...response, message: response?.message[0] };
};
