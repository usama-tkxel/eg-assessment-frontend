// eslint-disable-next-line import/prefer-default-export
export const authParser = (response = {}) => {
  const { authorization = {}, user = {} } = response ?? {};
  const { token = '' } = authorization;
  const { role: { id } = {} } = user;
  localStorage.setItem('authToken', token);
  const DEFAULT_USER = {
    superAdmin: false,
  };

  const updatedUser = {
    ...DEFAULT_USER,
    ...user,
    authorization,
    authenticated: true,
  };
  switch (id) {
    case 'admin':
      return {
        ...updatedUser,
        superAdmin: true,
      };

    default:
      return DEFAULT_USER;
  }
};
