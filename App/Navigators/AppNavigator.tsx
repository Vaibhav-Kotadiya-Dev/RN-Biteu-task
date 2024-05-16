import React from "react";
import ROUTE from "./constant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Containers/HomeScreen";
import Calculator from "../Containers/Calculator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name={ROUTE.HOMESCREEN} component={HomeScreen} />

        <Stack.Screen name={ROUTE.CALCULATOR} component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
