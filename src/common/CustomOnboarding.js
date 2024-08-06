import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { OnboardingStyle } from "../screens/Onboarding/OnboardingStyle";
import Colors from "../config/Colors";
import MainView from "./CustomMainView";
import { blueLogo } from "../assets/img/Images";

const CustomOnboarding = ({ btnTxt, heading, children, onPress }) => {
  return (
    <MainView
      statusBarProps={{ backgroundColor: Colors.blackColor }}
      style={{ backgroundColor: Colors.whiteColor }}
      ctnStyle={{ paddingHorizontal: 0, paddingTop: 23 }}
    >
      <View style={{ paddingHorizontal: 35 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View style={{ marginTop: 7 }}>
            <SvgXml xml={blueLogo} />
          </View>
          <TouchableOpacity
            style={OnboardingStyle.btnStyle}
            onPress={onPress}
            activeOpacity={0.6}
          >
            <Text style={OnboardingStyle.btnTitle}>{btnTxt}</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            OnboardingStyle.selectTxt,
            { paddingTop: 24, lineHeight: 34 },
          ]}
        >
          {heading}
        </Text>
      </View>
      <View
        style={{
          paddingTop: 54,
          flex: 1,
        }}
      >
        {children}
      </View>
    </MainView>
  );
};

export default CustomOnboarding;
