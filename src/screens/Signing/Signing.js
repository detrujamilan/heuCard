import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
  Platform,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../../common/CustomTextInput";
import CustomMainView from "../../common/CustomMainView";
import { SvgXml } from "react-native-svg";
import {
  appleLogo,
  facebookLogo,
  googleLogo,
  heuBlueLogo,
} from "../../assets/img/Images";
import { AuthFlowStyles } from "../../Auth/AuthFlowStyles";
import CustomButton from "../../common/CustomButton";

const Signing = ({ navigation }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <CustomMainView>
      <View>
        <SvgXml xml={heuBlueLogo} />
        <View style={{ paddingVertical: 30 }}>
          <Text style={AuthFlowStyles.headerText}>Sign in into heu!</Text>
          <Text style={AuthFlowStyles.subHeaderText}>
            Welcome back. you’ve been missed!
          </Text>
        </View>
        <CustomTextInput placeholder="Enter Your Email" label="Email" />
        <CustomTextInput
          mainContainerStyle={AuthFlowStyles.passwordInput}
          placeholder="Enter your password"
          label="Password"
          eyeIconValue={true}
          showPassword={visiblePassword}
          setShowPassword={setVisiblePassword}
          secureTextEntry={visiblePassword ? true : false}
        />
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={AuthFlowStyles.forgotPasswordText}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        <View style={AuthFlowStyles.orSignInWithContainer}>
          <View style={AuthFlowStyles.borderStyle}></View>
          <Text style={AuthFlowStyles.orSignInWithText}>OR Sign in with</Text>
          <View style={AuthFlowStyles.borderStyle}></View>
        </View>
        <View style={AuthFlowStyles.socialIconsContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <SvgXml xml={googleLogo} />
          </TouchableOpacity>
          {Platform.OS === "ios" && (
            <TouchableOpacity activeOpacity={0.5}>
              <SvgXml xml={appleLogo} style={{ marginHorizontal: 15 }} />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={{ marginLeft: 15 }} activeOpacity={0.5}>
            <SvgXml xml={facebookLogo} />
          </TouchableOpacity>
        </View>

        <Text style={AuthFlowStyles.signUpText}>
          Don’t have account?
          <Text
            style={AuthFlowStyles.signUpLink}
            onPress={() => navigation.navigate("Signup")}
          >
            {""} Sign up
          </Text>
        </Text>
      </View>
      <CustomButton
        title="Sign In"
        btnStyle={{ position: "absolute", bottom: 30 }}
      />
    </CustomMainView>
  );
};

export default Signing;
