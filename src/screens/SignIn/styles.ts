import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {getBottomSpace} from 'react-native-iphone-x-helper';

//configurei o Linear gradient e passei ele como propriedade no attrs
//Usei o start/end para configurar por onde começa a termina o mesmo
export const Container = styled(LinearGradient).attrs(({theme}) => ({
  colors: theme.colors.GRADIENT,
  start: {x: 0, y: 1},
  end: {x: 0.5, y: 0.5},
}))`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48,
  },
})`
  width: 100%;
  padding: 0 32px;
`;

export const Brand = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 340px;
  margin-top: 85px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${({theme}) => theme.fonts.TITLE};
  color: ${({theme}) => theme.colors.TITLE};
  margin-bottom: 23px;
`;

export const ForgotPassword = styled.Text`
  text-align: right;
  color: ${({theme}) => theme.colors.TITLE};
  font-family: ${({theme}) => theme.fonts.TEXT};
  margin-top: 5px;
`;
