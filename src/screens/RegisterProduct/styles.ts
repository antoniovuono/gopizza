import {ScrollView, TextInput} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
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

export const Form = styled.View`
  padding: 10px 20px;
`;

export const InputTitle = styled.Text`
  font-size: 14px;
  ${({theme}) =>
    theme &&
    css`
      color: ${theme.colors.SECONDARY_900};
      font-family: ${theme.fonts.TEXT};
    `}
`;

export const InputName = styled.TextInput`
  width: 100%;
  border-radius: 12px;
  padding: 15px;
  height: 50px;
  margin-top: 11px;
  font-size: 14px;

  ${({theme}) =>
    theme &&
    css`
      background-color: ${theme.colors.TITLE};
      border: 1px solid ${theme.colors.BORDER};
      color: ${theme.colors.SECONDARY_900};
      font-family: ${theme.fonts.TEXT};
    `}
`;

export const DescriptionLabelContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;
`;

export const MaxCharacters = styled.Text`
  font-size: 10px;

  ${({theme}) =>
    theme &&
    css`
      color: ${theme.colors.SECONDARY_900};
      font-family: ${theme.fonts.TEXT};
    `}
`;

export const InputDescription = styled.TextInput`
  width: 100%;
  border-radius: 12px;
  padding: 15px;
  height: 80px;
  margin-top: 11px;
  margin-bottom: 16px;
  font-size: 14px;

  ${({theme}) =>
    theme &&
    css`
      background-color: ${theme.colors.TITLE};
      border: 1px solid ${theme.colors.BORDER};
      color: ${theme.colors.SECONDARY_900};
      font-family: ${theme.fonts.TEXT};
    `}
`;

export const PriceInputContent = styled.View`
  margin-top: 10px;
  width: 100%;
  border-radius: 12px;
  height: 50px;
  flex-direction: row;
  align-items: center;

  ${({theme}) =>
    theme &&
    css`
      background-color: ${theme.colors.TITLE};
      border: 1px solid ${theme.colors.BORDER};
    `}
`;

export const ProductSizeContent = styled.View`
  width: 15%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${({theme}) => theme.colors.BORDER};
`;

export const ProductSizeLabel = styled.Text`
  font-size: 14px;

  ${({theme}) =>
    theme &&
    css`
      font-family: ${theme.fonts.TEXT};
      color: ${theme.colors.SECONDARY_900};
    `}
`;

export const PriceInput = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.colors.SECONDARY_900,
}))`
  padding: 10px;
  width: 85%;
  font-size: 14px;

  ${({theme}) =>
    theme &&
    css`
      font-family: ${theme.fonts.TEXT};
      color: ${theme.colors.SECONDARY_900};
    `}
`;

export const ButtonContent = styled.View`
  width: 100%;
  margin-bottom: ${getBottomSpace() + 10}px;
`;
