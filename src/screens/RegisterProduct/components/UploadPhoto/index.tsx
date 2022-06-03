import React from 'react';

import * as Styled from './styles';

interface IUploud {
  uri: string | null;
}

const UploadPhoto: React.FC<IUploud> = ({uri}) => {
  if (uri) {
    <Styled.Image source={{uri}} />;
  }

  return (
    <Styled.Placeholder>
      <Styled.PlaceholderTitle>Nenhuma foto carregada</Styled.PlaceholderTitle>
    </Styled.Placeholder>
  );
};

export default UploadPhoto;
