import React from 'react';
import CloseIcon from '@assets/icons/close.svg';
import * as Styled from './styles';

const SearchInput: React.FC = () => {
  return (
    <Styled.InputView>
      <Styled.SearchInputText maxLength={25} />
      <Styled.ClearInputButton>
        <CloseIcon />
      </Styled.ClearInputButton>
    </Styled.InputView>
  );
};

export default SearchInput;
