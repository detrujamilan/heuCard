import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signing from "../screens/Signing/Signing";
import Signup from "../screens/Signup/Signup";

const Stack = createNativeStackNavigator();

const Navigation = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signing"
        component={Signing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
