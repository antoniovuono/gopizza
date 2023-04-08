import React from "react";
import { TextInputProps } from "react-native";

import { Container, TypeProps } from "./styles";

type InputProps = TextInputProps & {
    type?: TypeProps;
};

export const Input = ({ type = "primary", ...rest }: InputProps) => {
    return <Container type={type} {...rest} />;
};
