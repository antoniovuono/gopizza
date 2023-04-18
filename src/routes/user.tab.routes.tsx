import { BottomMenu } from "@components/BottomMenu";
import firestore from "@react-native-firebase/firestore";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { Orders } from "@screens/Orders";
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components";

const { Screen, Navigator } = createBottomTabNavigator();

export const UserTabRoutes = () => {
    const [notifications, setNotifications] = useState("0");
    const { COLORS } = useTheme();

    useEffect(() => {
        const subscribe = firestore()
            .collection("orders")
            .where("status", "==", "Pronto")
            .onSnapshot((querySnapShoot) => {
                setNotifications(String(querySnapShoot.docs.length));
            });

        return () => subscribe();
    }, []);

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: COLORS.SECONDARY_900,
                tabBarInactiveTintColor: COLORS.SECONDARY_400,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 80,
                    paddingVertical: Platform.OS === "ios" ? 20 : 0,
                },
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <BottomMenu title="Cardápio" color={color} />
                    ),
                }}
            />
            <Screen
                name="Orders"
                component={Orders}
                options={{
                    tabBarIcon: ({ color }) => (
                        <BottomMenu
                            title="Pedidos"
                            color={color}
                            notifications={notifications}
                        />
                    ),
                }}
            />
        </Navigator>
    );
};
