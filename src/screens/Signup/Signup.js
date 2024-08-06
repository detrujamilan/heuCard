import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import {
  appleLogo,
  facebookLogo,
  googleLogo,
  heuBlueLogo,
} from "../../assets/img/Images";
import { AuthFlowStyles } from "../Signing/AuthFlowStyles";
import CustomTextInput from "../../common/CustomTextInput";
import { SignupStyle } from "./SignupStyle";
import Colors from "../../config/Colors";
import CustomButton, { gradientColors } from "../../common/CustomButton";
import MainView from "../../common/CustomMainView";
import { useFormik } from "formik";
import { registrationValidation } from "../../Validation/AuthValidation";

const Signup = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
    },
    validationSchema: registrationValidation,
    onSubmit: () => {},
  });

  const { touched, errors, handleSubmit } = formik;

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <MainView>
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
              value={formik.values.firstName}
              onChange={formik.handleChange("firstName")}
              mainContainerStyle={{ width: "49%" }}
              errors={
                touched.firstName && errors.firstName ? errors.firstName : null
              }
            />
            <CustomTextInput
              placeholder={"Enter your last name"}
              label={"Last Name"}
              mainContainerStyle={{ width: "49%" }}
              value={formik.values.lastName}
              onChange={formik.handleChange("lastName")}
              errors={
                touched.lastName && errors.lastName ? errors.lastName : null
              }
            />
          </View>
          <CustomTextInput
            mainContainerStyle={{ paddingVertical: 15 }}
            placeholder={"Enter your Email"}
            label={"Email"}
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            errors={touched.email && errors.email ? errors.email : null}
          />
          <CustomTextInput
            placeholder={"Enter your mobile number"}
            label={"Mobile Number"}
            value={formik.values.mobileNumber}
            onChange={formik.handleChange("mobileNumber")}
            errors={
              touched.mobileNumber && errors.mobileNumber
                ? errors.mobileNumber
                : null
            }
          />
          <CustomTextInput
            mainContainerStyle={{ paddingVertical: 15 }}
            placeholder={"Enter your Password"}
            label={"Password"}
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            errors={
              touched.password && errors.password ? errors.password : null
            }
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
        <Text style={SignupStyle.signUpText}>
          Don’t have account?
          <Text
            style={SignupStyle.signUpLink}
            onPress={() => navigation.navigate("Signing")}
          >
            {""} Sign in
          </Text>
        </Text>
        <CustomButton
          title="Sign Up"
          primaryColor={gradientColors}
          btnStyle={{ paddingTop: 67, paddingBottom: 10 }}
          onPress={handleSubmit}
        />
      </MainView>
    </ScrollView>
  );
};

export default Signup;
