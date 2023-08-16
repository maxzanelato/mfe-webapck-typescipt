import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from 'react';

import { AUTH_STATUS } from '../enums/AUTH_STATUS';
import CurrentUser from 'shared-types/interfaces/CurrentUser';
import AuthContextData from 'shared-types/interfaces/AuthContextData';
import UserCredentials from 'shared-types/interfaces/UserCredentials';
import { isAuthenticated, isLoading, login } from '../utils/authUtils';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser>(
    {} as CurrentUser
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<
    (typeof AUTH_STATUS)[keyof typeof AUTH_STATUS]
  >(AUTH_STATUS.Idle);

  const authenticate = useCallback(
    async ({ email, password }: UserCredentials) => {
      setStatus(AUTH_STATUS.Loading);

      try {
        const user = await login({ email, password });

        setCurrentUser(user);
        setStatus(AUTH_STATUS.Authenticated);

        return user;
      } catch (e) {
        setCurrentUser({} as CurrentUser);
        setStatus(AUTH_STATUS.Fail);

        throw new Error(String(e));
      }
    },
    []
  );

  useEffect(() => {
    setAuthenticated(isAuthenticated(status));
    setLoading(isLoading(status));
  }, [status]);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        currentUser,
        loading,
        status,
        authenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
