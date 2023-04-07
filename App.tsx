import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import theme from "@styles/theme";
import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";

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
            <View></View>
        </ThemeProvider>
    );
}
