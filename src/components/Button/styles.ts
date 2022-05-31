import styled from 'styled-components/native';

interface IButtonProps {
  type: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity<IButtonProps>`
  width: 100%;
  background-color: ${({theme, type}) =>
    type === 'primary' ? theme.colors.PRIMARY_800 : theme.colors.SUCCESS_900};
  padding: 16px 135px;
  border-radius: 12px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.TITLE};
  font-family: ${({theme}) => theme.fonts.TEXT};
`;
