import { ButtonBack } from "@components/ButtonBack";
import { RadioButton } from "@components/RadioButton";
import { PIZZA_TYPES } from "@utils/pizzaTypes";
import React, { useState } from "react";
import { Platform } from "react-native";

import { Container, Header, Photo, Sizes } from "./styles";

export const Order = () => {
    const [size, setSize] = useState("");

    return (
        <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <Header>
                <ButtonBack onPress={() => {}} style={{ marginBottom: 108 }} />
            </Header>

            <Photo source={{ uri: "https://github.com/antoniovuono.png" }} />

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
        </Container>
    );
};
