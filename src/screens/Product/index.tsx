import { ButtonBack } from "@components/ButtonBack";
import React from "react";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Container, Header, Title, DeleteLabel } from "./styles";

export const Product = () => {
    return (
        <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <Header>
                <ButtonBack />

                <Title>Cadastrar</Title>

                <TouchableOpacity>
                    <DeleteLabel>Deletar</DeleteLabel>
                </TouchableOpacity>
            </Header>
        </Container>
    );
};
