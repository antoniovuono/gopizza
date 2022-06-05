import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import LogoImage from '@assets/images/brand.png';

import * as Styled from './styles';
import SignInInputs from './components/SignInInputs';
import PasswordInput from './components/PasswordInput';
import Button from '@components/Button';
import useAuth from '@hooks/auth';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, loading, user} = useAuth();

  console.log('user', user);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    signIn(email, password);
  };

  return (
    <Styled.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Styled.Content>
          <Styled.Brand source={LogoImage} />
          <Styled.Title>Login</Styled.Title>

          <SignInInputs
            placeholder="E-mail"
            maxLength={37}
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
          <PasswordInput
            placeholder="Password"
            showPassword={showPassword}
            autoCorrect={false}
            onPressPassword={handleShowPassword}
            maxLength={30}
            onChangeText={setPassword}
            value={password}
          />

          <Styled.ForgotPassword>Esqueci minha senha</Styled.ForgotPassword>

          <Button
            type="primary"
            title="Entrar"
            onPress={handleSignIn}
            isLoading={loading}
          />
        </Styled.Content>
      </KeyboardAvoidingView>
    </Styled.Container>
  );
};

export default SignIn;
