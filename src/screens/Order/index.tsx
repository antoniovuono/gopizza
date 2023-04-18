import { Button } from "@components/Button";
import { ButtonBack } from "@components/ButtonBack";
import { Input } from "@components/Input";
import { ProductProps } from "@components/ProductCard";
import { RadioButton } from "@components/RadioButton";
import { useAuth } from "@hooks/auth";
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
    const [sendingOrder, setSendingOrder] = useState(false);

    const route = useRoute();

    const { id } = route.params as OrderNavigationProps;

    const { goBack, navigate } = useNavigation();
    const { user } = useAuth();

    const amount = size ? pizza.prices_sizes[size] * quantity : "0,00";

    const handleOrder = () => {
        if (!size) {
            return Alert.alert("Pedido", "Selecione o tamanho da pizza.");
        }

        if (!tableNumber) {
            return Alert.alert("Pedido", "Informe o número da mesa.");
        }

        if (!quantity) {
            return Alert.alert("Pedido", "Informe a quantidade.");
        }

        setSendingOrder(true);

        firestore()
            .collection("orders")
            .add({
                pizza: pizza.name,
                quantity,
                size,
                amount,
                table_number: tableNumber,
                status: "Preparando",
                waiter_id: user?.id,
                image: pizza.photo_url,
            })
            .then(() => navigate("Home"))
            .catch(() => {
                Alert.alert("Pedido", "Não foi possível realizar o pedido.");
            })
            .finally(() => {
                setSendingOrder(false);
            });
    };

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

                    <Button
                        title="Confirmar pedido"
                        onPress={handleOrder}
                        isLoading={sendingOrder}
                    />
                </Form>
            </ContentScroll>
        </Container>
    );
};
