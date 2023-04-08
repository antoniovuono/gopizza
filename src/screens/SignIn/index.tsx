import { Button } from "@components/Button";
import { Input } from "@components/Input";
import React from "react";

import { Container } from "./styles";

export const SignIn = () => {
    return (
        <Container>
            <Input
                placeholder="E-mail"
                type="secondary"
                autoCorrect={false}
                autoCapitalize="none"
            />

            <Input
                placeholder="Senha"
                type="secondary"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
            />

            <Button type="secondary" title="Entrar" isLoading={false} />
        </Container>
    );
};
