import React from 'react';

import { useAuth } from '../../hooks/auth';
import { AuthenticatedContainer } from './styles';

const Authenticated: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <AuthenticatedContainer>
      <h2>Você está logado, na aplicação Auth.</h2>

      <div>
        <label>Name</label>: {currentUser.name}
      </div>

      <div>
        <label>Email</label>: {currentUser.email}
      </div>
    </AuthenticatedContainer>
  );
};

export default Authenticated;
