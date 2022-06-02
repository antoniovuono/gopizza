import Home from '@screens/Home';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
// import SignIn from './src/screens/SignIn';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
