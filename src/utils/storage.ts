export const getAccessTokenFromStorage = (): string => {
  const token = localStorage.getItem('JogTracker/authToken');
  return token ? token : '';
};

export const setAccessTokenToStorage = (token: string): void => {
  return localStorage.setItem('JogTracker/authToken', token);
};

export const removeAccessTokenToStorage = (): void => {
  return localStorage.removeItem('JogTracker/authToken');
};
