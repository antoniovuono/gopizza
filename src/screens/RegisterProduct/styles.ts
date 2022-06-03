import {ScrollView} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BACKGROUND};
`;

export const FormContent = styled(ScrollView).attrs({
  showVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
`;

export const ImportPhotoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 32px 45px;
  justify-content: space-between;
`;

export const UplodadButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.PRIMARY_800};
  padding: 16px;
  border-radius: 12px;
`;

export const UploadTitle = styled.Text`
  font-size: 14px;
  ${({theme}) => css`
    font-family: ${theme.fonts.TEXT};
    color: ${theme.colors.TITLE};
  `}
`;
