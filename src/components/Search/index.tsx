import { Feather } from "@expo/vector-icons";
import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container, InputArea, Input, ButtonClear, Button } from "./styles";

type SearchProps = TextInputProps & {
    onSearch: () => void;
    onClear: () => void;
};

export const Search = ({ onClear, onSearch, ...rest }: SearchProps) => {
    const { COLORS } = useTheme();

    return (
        <Container>
            <InputArea>
                <Input placeholder="pesquisar..." {...rest} />

                <ButtonClear onPress={onClear}>
                    <Feather name="x" size={16} />
                </ButtonClear>
            </InputArea>

            <Button onPress={onSearch}>
                <Feather name="search" size={16} color={COLORS.TITLE} />
            </Button>
        </Container>
    );
};
