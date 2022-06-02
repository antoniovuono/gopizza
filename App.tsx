import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
import RegisterProduct from '@screens/RegisterProduct';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <RegisterProduct />
    </ThemeProvider>
  );
};

export default App;
