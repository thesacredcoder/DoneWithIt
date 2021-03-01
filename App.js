import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ImageInputList from "./app/components/ImageInputList";
import AuthNavigator from "./app/navigation/AuthNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

//   { label: "Furniture", value: 1 },
//   { label: "Cameras", value: 2 },
//   { label: "Clothing", value: 3 },
// ];

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
