import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { AuthProvider } from "@hooks/auth";
import { Home } from "@screens/Home";
import { Product } from "@screens/Product";
import { SignIn } from "@screens/SignIn";
import theme from "@styles/theme/theme";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";

export default function App() {
    const [fontsLoaded] = useFonts({
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                style="light"
            />
            <AuthProvider>
                <Home />
            </AuthProvider>
        </ThemeProvider>
    );
}
