import { styled } from 'styled-components';

const LogoContainer = styled.div`
  max-width: 250px;

  img {
    width: 100%;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  ${LogoContainer} {
    margin-bottom: 16px;
  }

  .MuiPaper-root {
    padding: 32px;
  }
`;
