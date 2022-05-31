import React from 'react';
import {TextInputProps} from 'react-native';
import OpenEyeIcon from '@assets/icons/eye.svg';

import * as Styled from './styles';

interface InputProps extends TextInputProps {
  show_password?: () => void;
}

const PasswordInput: React.FC<InputProps> = ({...rest}) => {
  return (
    <Styled.Container>
      <Styled.TextInputCotnent
        {...rest}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Styled.ButtonEye>
        <OpenEyeIcon />
      </Styled.ButtonEye>
    </Styled.Container>
  );
};

export default PasswordInput;
