import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
///Screens
import Home from "../screens/HomeScreen";
import HomeDetail from "../screens/HomeDetail";
import Character from "../screens/character";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeDetail" component={HomeDetail} />
        <Stack.Screen name="Character" component={Character} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
