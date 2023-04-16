import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { UserStackRoutes } from "./user.stack.routes";
import { UserTabRoutes } from "./user.tab.routes";

export const Routes = () => {
    return (
        <NavigationContainer>
            <UserTabRoutes />
        </NavigationContainer>
    );
};
