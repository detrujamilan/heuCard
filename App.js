import React from "react";
import { View } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </View>
    </>
  );
}
