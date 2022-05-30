import React from 'react';
import LogoImage from '@assets/images/brand.png';

import * as Styled from './styles';

const SignIn: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Brand source={LogoImage} />
        <Styled.Title>Login</Styled.Title>
      </Styled.Content>
    </Styled.Container>
  );
};

export default SignIn;
