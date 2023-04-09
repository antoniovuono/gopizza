import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useAuth } from "@hooks/auth";
import React, { useState } from "react";
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn, isLogging, forgotPassword } = useAuth();

    const handleSignIn = () => {
        signIn(email, password);
    };

    const handleForgotPassword = () => {
        forgotPassword(email);
    };

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
                        onChangeText={setEmail}
                    />

                    <Input
                        placeholder="Senha"
                        type="secondary"
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry
                        onChangeText={setPassword}
                    />

                    <ForgotPasswordButton onPress={handleForgotPassword}>
                        <ForgotPasswordLabel>
                            Esqueci minha senha
                        </ForgotPasswordLabel>
                    </ForgotPasswordButton>

                    <Button
                        type="secondary"
                        title="Entrar"
                        isLoading={isLogging}
                        onPress={handleSignIn}
                    />
                </FormContent>
            </KeyboardAvoidingView>
        </Container>
    );
};
