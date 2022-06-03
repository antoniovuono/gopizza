import Header from '@components/Header';
import React from 'react';
import UploadPhoto from './components/UploadPhoto';

import * as Styled from './styles';

const RegisterProduct: React.FC = () => {
  return (
    <Styled.Container>
      <Header title="Cadastrar" deleteButton="Deletar" showGoBack showDelete />

      <Styled.FormContent>
        <Styled.ImportPhotoContainer>
          <UploadPhoto uri={''} />

          <Styled.UplodadButton>
            <Styled.UploadTitle>Carregar</Styled.UploadTitle>
          </Styled.UplodadButton>
        </Styled.ImportPhotoContainer>
      </Styled.FormContent>
    </Styled.Container>
  );
};

export default RegisterProduct;
