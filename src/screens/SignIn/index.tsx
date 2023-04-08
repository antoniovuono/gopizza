import { Button } from "@components/Button";
import { Input } from "@components/Input";
import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";

import {
    Brand,
    Container,
    ForgotPasswordButton,
    ForgotPasswordLabel,
    FormContent,
    Title,
} from "./styles";
import BrandImg from "../../assets/brand.png";

export const SignIn = () => {
    return (
        <Container>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <FormContent>
                    <Brand source={BrandImg} />

                    <Title>Login</Title>
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

                    <ForgotPasswordButton>
                        <ForgotPasswordLabel>
                            Esqueci minha senha
                        </ForgotPasswordLabel>
                    </ForgotPasswordButton>

                    <Button type="secondary" title="Entrar" isLoading={false} />
                </FormContent>
            </KeyboardAvoidingView>
        </Container>
    );
};
