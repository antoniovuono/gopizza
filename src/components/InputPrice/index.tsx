import React from "react";
import { TextInputProps } from "react-native";

import { Container, Label, Size, Input } from "./styles";

type InputProps = TextInputProps & {
    size: string;
};

export const InputPrice = ({ size, ...rest }: InputProps) => {
    return (
        <Container>
            <Size>
                <Label>{size}</Label>
            </Size>

            <Label>R$</Label>

            <Input keyboardType="numeric" {...rest} />
        </Container>
    );
};
