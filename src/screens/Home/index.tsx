import React from 'react';
import * as Styled from './styles';
import {useTheme} from 'styled-components';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Styled.Container>
      <Styled.Title style={{color: theme.colors.SUCCESS_50}}>Home</Styled.Title>
    </Styled.Container>
  );
};

export default Home;
