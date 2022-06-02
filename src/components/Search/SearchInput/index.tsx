import React from 'react';
import CloseIcon from '@assets/icons/close.svg';
import * as Styled from './styles';
import {TextInputProps} from 'react-native';

interface ISearchInput extends TextInputProps {
  onPress: () => void;
}

const SearchInput: React.FC<ISearchInput> = ({onPress, ...rest}) => {
  return (
    <Styled.InputView>
      <Styled.SearchInputText
        maxLength={25}
        autoCapitalize="none"
        autoCorrect={false}
        {...rest}
      />
      <Styled.ClearInputButton onPress={onPress}>
        <CloseIcon />
      </Styled.ClearInputButton>
    </Styled.InputView>
  );
};

export default SearchInput;
