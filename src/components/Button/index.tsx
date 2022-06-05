import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import * as Styled from './styles';

interface IButton extends TouchableOpacityProps {
  type: 'primary' | 'secondary';
  title: string;
  isLoading?: boolean;
}

const Button: React.FC<IButton> = ({
  type,
  title,
  isLoading = false,
  ...rest
}) => {
  return (
    <Styled.Container type={type} activeOpacity={0.5} {...rest}>
      {isLoading ? <Styled.Loader /> : <Styled.Title>{title}</Styled.Title>}
    </Styled.Container>
  );
};

export default Button;
