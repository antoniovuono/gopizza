import React from 'react';
import SearchIcon from '@assets/icons/search.svg';

import * as Styled from './styles';

const SearchButton: React.FC = () => {
  return (
    <Styled.Container>
      <SearchIcon />
    </Styled.Container>
  );
};

export default SearchButton;
