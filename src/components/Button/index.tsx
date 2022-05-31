import React from 'react';
import * as Styled from './styles';

interface IButton {
  type: 'primary' | 'secondary';
  title: string;
}

const Button: React.FC<IButton> = ({type, title, ...rest}) => {
  return (
    <Styled.Container type={type} activeOpacity={0.7} {...rest}>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};

export default Button;
