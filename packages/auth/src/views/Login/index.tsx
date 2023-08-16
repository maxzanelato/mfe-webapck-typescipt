import { Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../components/Logo';
import { useAuth } from '../../hooks/auth';
import { LoginContainer } from './styles';
import LoginProps from 'shared-types/interfaces/LoginProps';
import { LoginForm } from '../../components/LoginForm';

const Login: React.FC<LoginProps> = ({ redirectTo }: LoginProps) => {
  let navigate = useNavigate();
  const { authenticated } = useAuth();

  useEffect(() => {
    if (authenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [authenticated]);

  return (
    <LoginContainer>
      <Logo />

      <Paper>
        <LoginForm />
      </Paper>
    </LoginContainer>
  );
};

export default Login;
