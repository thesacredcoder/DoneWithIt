import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MesssagesScreen from "../screens/MesssagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator mode="card">
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MesssagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
