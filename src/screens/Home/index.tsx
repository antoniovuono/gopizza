import { Search } from "@components/Search";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";

import {
    Container,
    Greeting,
    GreetingEmoji,
    GreetingText,
    Header,
} from "./styles";
import happyEmoji from "../../assets/happy.png";

export const Home = () => {
    const { COLORS } = useTheme();

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

            <Search onSearch={() => {}} onClear={() => {}} maxLength={35} />
        </Container>
    );
};
