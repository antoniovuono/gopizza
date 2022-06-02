import React from 'react';
import SearchIcon from '@assets/icons/search.svg';
import {TouchableOpacityProps} from 'react-native';

import * as Styled from './styles';

const SearchButton: React.FC<TouchableOpacityProps> = ({...rest}) => {
  return (
    <Styled.Container {...rest}>
      <SearchIcon />
    </Styled.Container>
  );
};

export default SearchButton;
