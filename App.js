import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppTextInput from "./app/components/AppTextInput";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MesssagesScreen from "./app/screens/MesssagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreen />
    // <MesssagesScreen />
    // <AccountScreen />
    // <ListingsScreen />
    <Screen>
      <AppTextInput placeholder="Write Something" icon="email" />
    </Screen>
  );
}
