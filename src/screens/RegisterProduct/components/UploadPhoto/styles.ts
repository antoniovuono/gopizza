import styled, {css} from 'styled-components/native';

export const Image = styled.Image``;

export const Placeholder = styled.View`
  height: 160px;
  width: 160px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;

  border: 1px dashed ${({theme}) => theme.colors.SECONDARY_900};
`;

export const PlaceholderTitle = styled.Text`
  text-align: center;

  ${({theme}) => css`
    font-family: ${theme.fonts.TEXT};
    color: ${theme.colors.SECONDARY_900};
  `}
`;
