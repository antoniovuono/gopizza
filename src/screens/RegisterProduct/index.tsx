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

        <Styled.Form>
          <Styled.InputTitle>Nome</Styled.InputTitle>
          <Styled.InputName />

          <Styled.DescriptionLabelContent>
            <Styled.InputTitle>Descrição</Styled.InputTitle>
            <Styled.MaxCharacters>Max 60 caracteres</Styled.MaxCharacters>
          </Styled.DescriptionLabelContent>

          <Styled.InputDescription multiline maxLength={60} />

          <Styled.InputTitle>Tamanhos e preços</Styled.InputTitle>

          <Styled.PriceInputContent>
            <Styled.ProductSizeContent>
              <Styled.ProductSizeLabel>P</Styled.ProductSizeLabel>
            </Styled.ProductSizeContent>
            <Styled.PriceInput placeholder="R$" keyboardType="numeric" />
          </Styled.PriceInputContent>

          <Styled.PriceInputContent>
            <Styled.ProductSizeContent>
              <Styled.ProductSizeLabel>M</Styled.ProductSizeLabel>
            </Styled.ProductSizeContent>
            <Styled.PriceInput placeholder="R$" keyboardType="numeric" />
          </Styled.PriceInputContent>

          <Styled.PriceInputContent>
            <Styled.ProductSizeContent>
              <Styled.ProductSizeLabel>G</Styled.ProductSizeLabel>
            </Styled.ProductSizeContent>
            <Styled.PriceInput placeholder="R$" keyboardType="numeric" />
          </Styled.PriceInputContent>
        </Styled.Form>
      </Styled.FormContent>
    </Styled.Container>
  );
};

export default RegisterProduct;
