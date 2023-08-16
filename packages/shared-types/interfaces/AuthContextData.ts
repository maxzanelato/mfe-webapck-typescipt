import CurrentUser from './CurrentUser';
import { AUTH_STATUS } from '../enums/AUTH_STATUS';
import UserCredentials from './UserCredentials';

export default interface AuthContextData {
  authenticated: boolean;
  currentUser: CurrentUser;
  loading: boolean;
  status: (typeof AUTH_STATUS)[keyof typeof AUTH_STATUS];
  authenticate: ({ email, password }: UserCredentials) => Promise<CurrentUser>;
}
