import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
// import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
};

export default App;
