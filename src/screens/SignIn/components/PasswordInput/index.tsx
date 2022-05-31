import React from 'react';
import {TextInputProps} from 'react-native';
import OpenEyeIcon from '@assets/icons/eye.svg';
import ClosedEyeIcon from '@assets/icons/eye2.svg';

import * as Styled from './styles';

interface InputProps extends TextInputProps {
  showPassword: boolean;
  onPressPassword: () => void;
}

const PasswordInput: React.FC<InputProps> = ({
  showPassword,
  onPressPassword,
  ...rest
}) => {
  return (
    <Styled.Container>
      <Styled.TextInputCotnent
        {...rest}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={showPassword}
      />

      <Styled.ButtonEye onPress={onPressPassword}>
        {showPassword ? <OpenEyeIcon /> : <ClosedEyeIcon />}
      </Styled.ButtonEye>
    </Styled.Container>
  );
};

export default PasswordInput;
