import React, {useState} from 'react';
import LogoImage from '@assets/images/brand.png';

import * as Styled from './styles';
import SignInInputs from './components/SignInInputs';
import PasswordInput from './components/PasswordInput';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Brand source={LogoImage} />
        <Styled.Title>Login</Styled.Title>

        <SignInInputs placeholder="E-mail" />
        <PasswordInput
          placeholder="Password"
          showPassword={showPassword}
          onPressPassword={handleShowPassword}
        />
      </Styled.Content>
    </Styled.Container>
  );
};

export default SignIn;
