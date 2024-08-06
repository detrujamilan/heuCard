import { View, Text, Image } from "react-native";
import React from "react";
import CustomOnboarding from "../../common/CustomOnboarding";
import { Ellipse, onBoardingImgOne } from "../../assets/img/Images";

const OnboardingCarousel = ({ navigation }) => {
  return (
    <CustomOnboarding
      btnTxt={"Skip"}
      heading={`We’ll alert you whenever\nthere is an offer to grab!`}
      onPress={() => navigation.navigate("AppPermissions")}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          source={Ellipse}
          resizeMode="stretch"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <View
          style={{
            backgroundColor: "red",
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Text>Carousel</Text>
        </View>
      </View>
    </CustomOnboarding>
  );
};

export default OnboardingCarousel;
