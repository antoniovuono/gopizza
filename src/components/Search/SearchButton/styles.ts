import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.SUCCESS_900};
  border-radius: 12px;
  padding: 13px;
  justify-content: center;
  align-items: center;
`;
