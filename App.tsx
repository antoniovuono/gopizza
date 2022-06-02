import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
// import SignIn from './src/screens/SignIn';
import RegisterProduct from '@screens/RegisterProduct';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RegisterProduct />
    </ThemeProvider>
  );
};

export default App;
