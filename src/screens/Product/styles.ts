import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT,
}))`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${getStatusBarHeight() + 33}PX 24px 24px;
`;

export const Title = styled.Text`
    font-size: 24px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.TITLE};
    `}
`;

export const DeleteLabel = styled.Text`
    font-size: 14px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.TITLE};
    `}
`;

export const PickImageButton = styled.TouchableOpacity`
    margin-left: 32px;
    width: 90px;
    height: 56px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
`;

export const PickImageLabel = styled.Text`
    font-size: 14px;

    ${({ theme }) => css`
        color: ${theme.COLORS.TITLE};
        font-family: ${theme.FONTS.TEXT};
    `}
`;

export const Form = styled.View`
    width: 100%;
    padding: 24px;
`;

export const Label = styled.Text`
    margin-bottom: 12px;
    font-size: 14px;

    ${({ theme }) => css`
        color: ${theme.COLORS.SECONDARY_900};
        font-family: ${theme.FONTS.TEXT};
    `}
`;

export const InputGroup = styled.View`
    width: 100%;
    margin-bottom: 16px;
`;

export const InputGroupHeader = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const MaxCharacters = styled.Text`
    font-size: 10px;
    margin-bottom: 12px;

    ${({ theme }) => css`
        color: ${theme.COLORS.SECONDARY_900};
        font-family: ${theme.FONTS.TEXT};
    `}
`;
