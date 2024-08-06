import React from "react";
import CustomOnboarding from "../../common/CustomOnboarding";
import { Image, Text, View } from "react-native";
import { onBoardingImg } from "../../assets/img/Images";

const Onboarding = ({ navigation }) => {
  return (
    <>
      <CustomOnboarding
        btnTxt={"Skip"}
        heading={`Select and Save\nYour Cards`}
        onPress={() => navigation.navigate("OnboardingOne")}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Image
            source={onBoardingImg}
            resizeMode="stretch"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              bottom: -5,
            }}
          />
        </View>
      </CustomOnboarding>
    </>
  );
};

export default Onboarding;
