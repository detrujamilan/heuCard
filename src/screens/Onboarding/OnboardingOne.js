import { View, Text, Image } from "react-native";
import React from "react";
import CustomOnboarding from "../../common/CustomOnboarding";
import { onBoardingImg, onBoardingImgOne } from "../../assets/img/Images";

const OnboardingOne = ({ navigation }) => {
  return (
    <CustomOnboarding
      btnTxt={"Skip"}
      heading={`Let us know where\nyou are`}
      onPress={() => navigation.navigate("OnboardingCarousel")}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          source={onBoardingImgOne}
          resizeMode="stretch"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: 0,
          }}
        />
      </View>
    </CustomOnboarding>
  );
};

export default OnboardingOne;
