import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import MainView from "../../common/CustomMainView";
import CustomGoBackButton from "../../common/CustomGoBackButton";
import CustomTextInput from "../../common/CustomTextInput";
import CustomButton, { gradientColors } from "../../common/CustomButton";
import { SvgXml } from "react-native-svg";
import { forgetPasswordImg } from "../../assets/img/Images";
import { TextStyle } from "../../common/TextStyle";

const ForgotPassword = ({ navigation }) => {
  const [isEmail, setIsEmail] = useState("");
  return (
    <MainView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <CustomGoBackButton  onPressGoBack={() => navigation.goBack()}/>
          <View
            style={{
              flex: 0.6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SvgXml xml={forgetPasswordImg} />
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Text style={TextStyle.headerTxt}>Forgot password?</Text>
            <Text
              style={[TextStyle.normalTxt, { paddingTop: 3, lineHeight: 22 }]}
            >
              Don't worry! it occurs. Please enter the email address linked with
              your account.
            </Text>
            <View style={{ paddingTop: 30 }}>
              <CustomTextInput
                label={"Email"}
                onChange={(text) => setIsEmail(text)}
                placeholder={"Enter your email"}
              />
              <CustomButton
                onPress={() => navigation.navigate("ResetPassword")}
                title={"Send Code"}
                primaryColor={gradientColors}
                mainButtonCtn={{ paddingTop: 30, paddingBottom: 15 }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </MainView>
  );
};

export default ForgotPassword;
