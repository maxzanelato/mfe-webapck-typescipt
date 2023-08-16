import React from 'react';

import { LogoContainer } from './styles';

import logo from '../../assets/images/logo.svg';

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <img alt="logo" src={logo} />
    </LogoContainer>
  );
};

export default Logo;
