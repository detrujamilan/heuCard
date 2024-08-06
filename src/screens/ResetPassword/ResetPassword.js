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

const ResetPassword = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <MainView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <CustomGoBackButton onPressGoBack={() => navigation.goBack()} />
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
            <Text style={TextStyle.headerTxt}>Create new password</Text>
            <Text
              style={[TextStyle.normalTxt, { paddingTop: 3, lineHeight: 22 }]}
            >
              Your new password must be unique from those previously used.
            </Text>
            <View>
              <CustomTextInput
                mainContainerStyle={{ paddingTop: 30 }}
                label={"Password"}
                placeholder={"Enter your new password"}
                eyeIconValue={true}
                secureTextEntry={showPassword ? true : false}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
              <CustomTextInput
                mainContainerStyle={{ paddingTop: 15 }}
                label={"Confirm Password"}
                placeholder={"Re-Enter your new password"}
                eyeIconValue={true}
                secureTextEntry={showPassword ? true : false}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
              <CustomButton
                title={"Reset Password"}
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

export default ResetPassword;
