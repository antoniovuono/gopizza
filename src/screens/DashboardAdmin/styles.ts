import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled(LinearGradient).attrs(({theme}) => ({
  colors: theme.colors.GRADIENT,
  start: {x: 0, y: 1},
  end: {x: 0.5, y: 0.5},
}))`
  height: 120px;
  width: 100%;
  flex-direction: row;
  padding-top: ${getStatusBarHeight() + 10}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
`;

export const GrettingsContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const Grettings = styled.Text`
  font-family: ${({theme}) => theme.fonts.TITLE};
  font-size: 20px;
  color: ${({theme}) => theme.colors.TITLE};
  margin-left: 12px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 15px;
`;
