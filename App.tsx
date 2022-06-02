import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
// import RegisterProduct from '@screens/RegisterProduct';
import Home from '@screens/Home';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <RegisterProduct /> */}

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </ThemeProvider>
  );
};

export default App;
