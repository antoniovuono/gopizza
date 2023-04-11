import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Product } from "@screens/Product";
import React from "react";

const { Navigator, Screen } = createNativeStackNavigator();

export const UserStackRoutes = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={Home} />
            <Screen name="Product" component={Product} />
        </Navigator>
    );
};
