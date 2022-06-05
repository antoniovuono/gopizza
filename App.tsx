import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
// import RegisterProduct from '@screens/RegisterProduct';
import Toast from 'react-native-toast-message';
import {StatusBar} from 'react-native';
import SignIn from '@screens/SignIn';
import {AuthProvider} from '@hooks/auth';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <AuthProvider>
        <SignIn />
        <Toast />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
