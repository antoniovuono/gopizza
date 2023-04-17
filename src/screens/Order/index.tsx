import { Button } from "@components/Button";
import { ButtonBack } from "@components/ButtonBack";
import { Input } from "@components/Input";
import { ProductProps } from "@components/ProductCard";
import { RadioButton } from "@components/RadioButton";
import firestore from "@react-native-firebase/firestore";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PIZZA_TYPES } from "@utils/pizzaTypes";
import React, { useState, useEffect } from "react";
import { Alert, Platform } from "react-native";

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
import {
    OrderNavigationProps,
    ProductNavigationProps,
} from "../../../src/@types/navigation";

type PizzaResponse = ProductProps & {
    prices_sizes: {
        [key: string]: number;
    };
};

export const Order = () => {
    const [size, setSize] = useState("");
    const [pizza, setPizza] = useState<PizzaResponse>({} as PizzaResponse);
    const [quantity, setQuantity] = useState(0);
    const [tableNumber, setTableNumber] = useState("");

    const route = useRoute();

    const { id } = route.params as OrderNavigationProps;

    const { goBack } = useNavigation();

    const amount = size ? pizza.prices_sizes[size] * quantity : "0,00";

    useEffect(() => {
        if (id) {
            firestore()
                .collection("pizzas")
                .doc(id)
                .get()
                .then((response) => setPizza(response.data() as PizzaResponse))
                .catch(() =>
                    Alert.alert(
                        "Pedido",
                        "Não foi possível carregar o produto."
                    )
                );
        }
    }, [id]);

    return (
        <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <ContentScroll>
                <Header>
                    <ButtonBack
                        onPress={goBack}
                        style={{ marginBottom: 108 }}
                    />
                </Header>

                <Photo source={{ uri: pizza.photo_url }} />

                <Form>
                    <Title>{pizza.name}</Title>
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
                            <Input
                                keyboardType="numeric"
                                onChangeText={setTableNumber}
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label>Quantidade</Label>
                            <Input
                                keyboardType="numeric"
                                onChangeText={(value) =>
                                    setQuantity(Number(value))
                                }
                            />
                        </InputGroup>
                    </FormRow>

                    <Price>Valor de R$ {amount}</Price>

                    <Button title="Confirmar pedido" />
                </Form>
            </ContentScroll>
        </Container>
    );
};
