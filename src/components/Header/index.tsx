import React from 'react';
import * as Styled from './styles';

import GoBackIcon from '@assets/icons/goback.svg';

export interface IHeader {
  title: string;
  showDelete?: boolean;
  deleteButton: string;
  showGoBack?: boolean;
  goBackPress?: () => void;
  deletePress?: () => void;
}

const Header: React.FC<IHeader> = ({
  title,
  deleteButton,
  showGoBack,
  showDelete,
  goBackPress,
  deletePress,
}) => {
  return (
    <Styled.Container>
      <Styled.HeaderContent showDelete={showDelete} showGoBack={showGoBack}>
        {showGoBack && (
          <Styled.GoBackButton onPress={goBackPress}>
            <GoBackIcon />
          </Styled.GoBackButton>
        )}

        <Styled.Title>{title}</Styled.Title>

        {showDelete && (
          <Styled.DeleteButton onPress={deletePress}>
            <Styled.DeleteButtonLabel>{deleteButton}</Styled.DeleteButtonLabel>
          </Styled.DeleteButton>
        )}
      </Styled.HeaderContent>
    </Styled.Container>
  );
};

export default Header;
