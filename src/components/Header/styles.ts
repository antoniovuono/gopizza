import styled, {css} from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

interface IHeaderContent {
  showGoBack?: boolean;
  showDelete?: boolean;
}

export const Container = styled(LinearGradient).attrs(({theme}) => ({
  colors: theme.colors.GRADIENT,
  start: {x: 0, y: 1},
  end: {x: 0.5, y: 0.5},
}))`
  height: 120px;
  justify-content: center;
  padding: 0 24px;
`;

export const HeaderContent = styled.View<IHeaderContent>`
  flex-direction: row;
  margin-top: ${getStatusBarHeight() + 3}px;
  align-items: center;
  justify-content: space-between;

  ${({showGoBack, showDelete}) =>
    !showGoBack &&
    !showDelete &&
    css`
      justify-content: center;
    `}
`;

export const GoBackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.TITLE};
  color: ${({theme}) => theme.colors.TITLE};
  font-size: 20px;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const DeleteButtonLabel = styled.Text`
  font-family: ${({theme}) => theme.fonts.TEXT};
  color: ${({theme}) => theme.colors.TITLE};
  font-size: 14px;
`;
