import { TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export type TypeProps = "primary" | "secondary";

type ContainerProps = {
    type: TypeProps;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
    flex: 1;
    max-height: 56px;
    min-height: 56px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, type }) =>
        type === "primary"
            ? theme.COLORS.SUCCESS_900
            : theme.COLORS.PRIMARY_800};
`;

export const Title = styled.Text`
    font-size: 14px;

    ${({ theme }) => css`
        color: ${theme.COLORS.TITLE};
        font-family: ${theme.FONTS.TEXT};
    `}
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.TITLE,
}))``;
