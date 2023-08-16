import { AUTH_STATUS } from '../enums/AUTH_STATUS';
import CurrentUser from 'shared-types/interfaces/CurrentUser';
import UserCredentials from 'shared-types/interfaces/UserCredentials';

export const login = ({
  email,
  password,
}: UserCredentials): Promise<CurrentUser> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'username@gmail.com' && password === 'password') {
        return resolve({ email, name: 'Max' });
      }

      reject('Email ou senha incorretos.');
    }, 1000);
  });

export const isAuthenticated = (
  status: (typeof AUTH_STATUS)[keyof typeof AUTH_STATUS]
) => status === AUTH_STATUS.Authenticated;

export const isLoading = (
  status: (typeof AUTH_STATUS)[keyof typeof AUTH_STATUS]
) => status === AUTH_STATUS.Loading;
