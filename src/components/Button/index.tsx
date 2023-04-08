import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Loading, Title, TypeProps } from "./styles";

type ButtonProps = RectButtonProps & {
    title: string;
    type?: TypeProps;
    isLoading?: boolean;
};

export const Button = ({
    title,
    type = "primary",
    isLoading,
    ...rest
}: ButtonProps) => {
    return (
        <Container type={type} enabled={!isLoading} {...rest}>
            {isLoading ? <Loading /> : <Title>{title}</Title>}
        </Container>
    );
};
