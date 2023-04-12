import { ProductCard, ProductProps } from "@components/ProductCard";
import { Search } from "@components/Search";
import { MaterialIcons } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { Alert, TouchableOpacity, FlatList } from "react-native";
import { useTheme } from "styled-components";

import {
    Container,
    Greeting,
    GreetingEmoji,
    GreetingText,
    Header,
    MenuHeader,
    MenuItemsNumber,
    NewProductButton,
    Title,
} from "./styles";
import happyEmoji from "../../assets/happy.png";

export const Home = () => {
    const [pizzas, setPizzas] = useState<ProductProps[]>([]);
    const [search, setSearch] = useState("");
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    const fetchPizzas = (value: string) => {
        const formattedValue = value.toLocaleLowerCase().trim();

        // Buscamos os dados das pizzas no firestore retornando
        // Por ordem alfabética.
        firestore()
            .collection("pizzas")
            .orderBy("name_insensitive")
            .startAt(formattedValue)
            .endAt(`${formattedValue}\uf8ff`)
            .get()
            .then((resposne) => {
                const data = resposne.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                }) as ProductProps[];

                setPizzas(data);
            })
            .catch(() =>
                Alert.alert(
                    "Consulta",
                    "Não foi possível realizar a consulta das pizzas "
                )
            );
    };

    const handleSearch = () => {
        fetchPizzas(search);
    };

    const handleSearchClear = () => {
        setSearch("");
        fetchPizzas("");
    };

    const handleOpen = (id: string) => {
        navigation.navigate("Product", { id });
    };

    const handleAdd = () => {
        navigation.navigate("Product", {});
    };

    const tratativeForNumberOffpizzas = () => {
        if (pizzas.length === 0) {
            return "Nenhuma pizza";
        } else if (pizzas.length === 1) {
            return `${pizzas.length} pizza`;
        } else {
            return `${pizzas.length} pizzas`;
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchPizzas("");
        }, [])
    );

    return (
        <Container>
            <Header>
                <Greeting>
                    <GreetingEmoji source={happyEmoji} />

                    <GreetingText>Olá, Admin</GreetingText>
                </Greeting>

                <TouchableOpacity>
                    <MaterialIcons
                        name="logout"
                        color={COLORS.TITLE}
                        size={24}
                    />
                </TouchableOpacity>
            </Header>

            <Search
                onChangeText={setSearch}
                value={search}
                onSearch={handleSearch}
                onClear={handleSearchClear}
                maxLength={35}
            />

            <MenuHeader>
                <Title>Cardápio</Title>
                <MenuItemsNumber>
                    {tratativeForNumberOffpizzas()}
                </MenuItemsNumber>
            </MenuHeader>

            <FlatList
                data={pizzas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductCard
                        data={item}
                        onPress={() => handleOpen(item.id)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20,
                    paddingBottom: 12,
                    marginHorizontal: 24,
                }}
            />

            <NewProductButton
                title="Cadastrar Pizza"
                type="secondary"
                onPress={handleAdd}
            />
        </Container>
    );
};
