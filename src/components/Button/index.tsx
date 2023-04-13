import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Loading, Title, TypeProps } from "./styles";

type ButtonProps = TouchableOpacityProps & {
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
        <Container type={type} disabled={isLoading} {...rest}>
            {isLoading ? <Loading /> : <Title>{title}</Title>}
        </Container>
    );
};
