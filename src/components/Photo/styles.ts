import { Button } from "@components/Button";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Image = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 80px;
`;

export const PlaceHolder = styled.View`
    width: 160px;
    height: 160px;
    border-radius: 80px;
    justify-content: center;
    align-items: center;

    border: 1px dashed ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

export const PlaceHolderTitle = styled.Text`
    font-size: 14px;
    text-align: center;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.SECONDARY_900};
    `}
`;

export const Upload = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 32px 0;
`;

export const PickImageButton = styled(Button)`
    max-width: 90px;
    margin-left: 32px;
`;
