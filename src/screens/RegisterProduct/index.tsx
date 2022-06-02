import Header from '@components/Header';
import React from 'react';

import * as Styled from './styles';

const RegisterProduct: React.FC = () => {
  return (
    <Styled.Container>
      <Header title="Cadastrar" deleteButton="Deletar" showGoBack showDelete />
    </Styled.Container>
  );
};

export default RegisterProduct;
