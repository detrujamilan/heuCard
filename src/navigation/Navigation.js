import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signing from "../screens/Signing/Signing";
import Signup from "../screens/Signup/Signup";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import ResetPassword from "../screens/ResetPassword/ResetPassword";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import Onboarding from "../screens/Onboarding/Onboarding";
import OnboardingOne from "../screens/Onboarding/OnboardingOne";
import OnboardingCarousel from "../screens/Onboarding/OnboardingCarousel";
import AppPermissions from "../screens/AppPermissions/AppPermissions";

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
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingOne"
        component={OnboardingOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingCarousel"
        component={OnboardingCarousel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppPermissions"
        component={AppPermissions}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
