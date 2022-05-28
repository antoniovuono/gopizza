import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
import Home from './src/screens/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
