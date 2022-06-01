import React from 'react';
import EmojiIcon from '@assets/icons/emoji.svg';
import LogoutIcon from '@assets/icons/logout.svg';
import * as Styled from './styles';

const DashboardAdmin: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.GrettingsContent>
          <EmojiIcon width={25} height={25} />
          <Styled.Grettings>Olá, Admin</Styled.Grettings>
        </Styled.GrettingsContent>

        <Styled.LogoutButton>
          <LogoutIcon />
        </Styled.LogoutButton>
      </Styled.Header>
    </Styled.Container>
  );
};

export default DashboardAdmin;
