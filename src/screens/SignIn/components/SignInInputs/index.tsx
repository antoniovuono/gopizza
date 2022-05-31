import React from 'react';
import {TextInputProps} from 'react-native';

import * as Styled from './styles';

interface InputProps extends TextInputProps {
  show_password?: () => void;
}

const SignInInputs: React.FC<InputProps> = ({...rest}) => {
  return (
    <Styled.Container>
      <Styled.TextInputCotnent
        {...rest}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </Styled.Container>
  );
};

export default SignInInputs;
