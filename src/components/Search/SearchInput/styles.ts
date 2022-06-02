import styled from 'styled-components/native';

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  background-color: ${({theme}) => theme.colors.TITLE};
  justify-content: space-between;
  padding: 0 20px;
`;

export const SearchInputText = styled.TextInput`
  height: 48px;
  width: 90%;
`;

export const ClearInputButton = styled.TouchableOpacity``;
