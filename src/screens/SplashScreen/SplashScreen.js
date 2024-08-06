import { View, Text } from "react-native";
import React, { useEffect } from "react";
import CustomLinearGradient from "../../common/CustomLinearGradient";
import { SvgXml } from "react-native-svg";
import { heuLogo, whiteSmallLogo } from "../../assets/img/Images";
import { SplashScreenStyle } from "./SplashScreenStyle";
import Colors from "../../config/Colors";

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Onboarding");
    }, 2000);
  }, []);

  
  return (
    <View style={{ flex: 1 }}>
      <CustomLinearGradient container={SplashScreenStyle.container}>
        <SvgXml xml={whiteSmallLogo} />
        <Text
          style={{
            fontFamily: "LeagueSpartan-SemiBold",
            color: Colors.whiteColor,
            fontSize: 22,
            lineHeight: 29,
          }}
        >
          Never miss out on your benefits.
        </Text>
      </CustomLinearGradient>
    </View>
  );
};

export default SplashScreen;
