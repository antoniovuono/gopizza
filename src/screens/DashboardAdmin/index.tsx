import React, {useState} from 'react';
import EmojiIcon from '@assets/icons/emoji.svg';
import LogoutIcon from '@assets/icons/logout.svg';
import * as Styled from './styles';
import SearchInput from '@components/Search/SearchInput';
import SearchButton from '@components/Search/SearchButton';

const DashboardAdmin: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleClearSearchInput = () => {
    setSearchValue('');
  };

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

      <Styled.SearchContainer>
        <Styled.InputConent>
          <SearchInput
            onChangeText={setSearchValue}
            value={searchValue}
            onPress={handleClearSearchInput}
          />
        </Styled.InputConent>

        <Styled.SearchButtonContent>
          <SearchButton />
        </Styled.SearchButtonContent>
      </Styled.SearchContainer>
    </Styled.Container>
  );
};

export default DashboardAdmin;
