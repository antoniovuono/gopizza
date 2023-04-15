import { Button } from "@components/Button";
import { ButtonBack } from "@components/ButtonBack";
import { Input } from "@components/Input";
import { RadioButton } from "@components/RadioButton";
import { PIZZA_TYPES } from "@utils/pizzaTypes";
import React, { useState } from "react";
import { Platform } from "react-native";

import {
    Container,
    ContentScroll,
    Form,
    FormRow,
    Header,
    InputGroup,
    Label,
    Photo,
    Price,
    Sizes,
    Title,
} from "./styles";

export const Order = () => {
    const [size, setSize] = useState("");

    return (
        <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <ContentScroll>
                <Header>
                    <ButtonBack
                        onPress={() => {}}
                        style={{ marginBottom: 108 }}
                    />
                </Header>

                <Photo
                    source={{ uri: "https://github.com/antoniovuono.png" }}
                />

                <Form>
                    <Title>Nome da Pizza</Title>
                    <Label>Selecione um tamanho</Label>
                    <Sizes>
                        {PIZZA_TYPES.map((item) => (
                            <RadioButton
                                key={item.id}
                                selected={item.id === size}
                                title={item.name}
                                onPress={() => setSize(item.id)}
                            />
                        ))}
                    </Sizes>

                    <FormRow>
                        <InputGroup>
                            <Label>Número da mesa</Label>
                            <Input keyboardType="numeric" />
                        </InputGroup>

                        <InputGroup>
                            <Label>Quantidade</Label>
                            <Input keyboardType="numeric" />
                        </InputGroup>
                    </FormRow>

                    <Price>Valor de R$ 00,00</Price>

                    <Button title="Confirmar pedido" />
                </Form>
            </ContentScroll>
        </Container>
    );
};
