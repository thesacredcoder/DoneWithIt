import React, { useState } from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MesssagesScreen from "./app/screens/MesssagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Cameras", value: 2 },
//   { label: "Clothing", value: 3 },
// ];

export default function App() {
  // const [category, setCategory] = useState(categories[0]);

  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreen />
    // <MesssagesScreen />
    // <AccountScreen />
    // <ListingsScreen />
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput placeholder="Write Something" icon="email" />
    // </Screen>
    <LoginScreen />
  );
}
