import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const TextInputCotnent = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.colors.TITLE,
}))`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.SHAPE};
  font-family: ${({theme}) => theme.fonts.TEXT};
  border-radius: 12px;
  padding: 20px;

  font-size: 14px;
  color: ${({theme}) => theme.colors.TITLE};
`;

export const ButtonEye = styled.TouchableOpacity`
  position: absolute;
  justify-content: flex-end;
  right: 15px;
`;
