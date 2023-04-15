import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT,
}))`
    padding: ${getStatusBarHeight() + 33}px 0 33px;
`;

export const Title = styled.Text`
    font-size: 24px;
    text-align: center;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.TITLE};
    `}
`;
