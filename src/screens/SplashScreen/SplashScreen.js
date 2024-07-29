import { View, Text } from "react-native";
import React from "react";
import CustomLinearGradient from "../../common/CustomLinearGradient";
import { SvgXml } from "react-native-svg";
import { heuLogo } from "../../assets/img/Images";
import { SplashScreenStyle } from "./SplashScreenStyle";

const SplashScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomLinearGradient container={SplashScreenStyle.container}>
        <SvgXml xml={heuLogo} />
      </CustomLinearGradient>
    </View>
  );
};

export default SplashScreen;
