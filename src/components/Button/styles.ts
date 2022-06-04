import styled from 'styled-components/native';

export interface IButtonProps {
  type: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity<IButtonProps>`
  width: 100%;
  background-color: ${({theme, type}) =>
    type === 'primary' ? theme.colors.PRIMARY_800 : theme.colors.SUCCESS_900};
  padding: 16px;
  border-radius: 12px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.TITLE};
  font-family: ${({theme}) => theme.fonts.TEXT};
`;
