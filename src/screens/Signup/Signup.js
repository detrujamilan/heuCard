import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import CustomMainView from "../../common/CustomMainView";
import { SvgXml } from "react-native-svg";
import {
  appleLogo,
  facebookLogo,
  googleLogo,
  heuBlueLogo,
} from "../../assets/img/Images";
import { AuthFlowStyles } from "../../Auth/AuthFlowStyles";
import CustomTextInput from "../../common/CustomTextInput";
import { SignupStyle } from "./SignupStyle";
import Colors from "../../config/Colors";
import CustomButton from "../../common/CustomButton";

const Signup = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <CustomMainView>
        <SvgXml xml={heuBlueLogo} />
        <View>
          <Text style={AuthFlowStyles.headerText}>Create new account</Text>
          <Text style={AuthFlowStyles.subHeaderText}>
            Create an account to join Heu
          </Text>
        </View>
        <View style={{ paddingTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomTextInput
              placeholder={"Enter your first name"}
              label={"First Name"}
              mainContainerStyle={{ width: "49%" }}
            />
            <CustomTextInput
              placeholder={"Enter your last name"}
              label={"Last Name"}
              mainContainerStyle={{ width: "49%" }}
            />
          </View>
          <CustomTextInput
            mainContainerStyle={{ paddingVertical: 15 }}
            placeholder={"Enter your Email"}
            label={"Email"}
          />
          <CustomTextInput
            placeholder={"Enter your mobile number"}
            label={"Mobile Number"}
          />
          <CustomTextInput
            mainContainerStyle={{ paddingVertical: 15 }}
            placeholder={"Enter your Password"}
            label={"Password"}
          />
        </View>
        <View style={SignupStyle.privacyContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            tintColors={{ true: Colors.BrightBlue, false: Colors.LightGray }}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={SignupStyle.ConditionTxt}>
            By clicking you're approving to our{" "}
            <Text style={SignupStyle.termsConditions}>Terms & conditions</Text>
            {"\n"}and{" "}
            <Text style={SignupStyle.termsConditions}>Privacy policy</Text>
          </Text>
        </View>
        <View>
          <View style={SignupStyle.orSignInWithContainer}>
            <View style={SignupStyle.borderStyle}></View>
            <Text style={SignupStyle.orSignInWithText}>OR Sign in with</Text>
            <View style={SignupStyle.borderStyle}></View>
          </View>
          <View style={SignupStyle.socialIconsContainer}>
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
        </View>

        <Text style={SignupStyle.signUpText}>
          Don’t have account?
          <Text
            style={SignupStyle.signUpLink}
            onPress={() => navigation.navigate("Signing")}
          >
            {""} Sign in
          </Text>
        </Text>
        <CustomButton title="Sign Up" />
      </CustomMainView>
    </ScrollView>
  );
};

export default Signup;
