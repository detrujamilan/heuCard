import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomTextInput from "../../common/CustomTextInput";
import { SvgXml } from "react-native-svg";
import {
  appleLogo,
  facebookLogo,
  googleLogo,
  heuBlueLogo,
} from "../../assets/img/Images";
import { AuthFlowStyles } from "./AuthFlowStyles";
import CustomButton, { gradientColors } from "../../common/CustomButton";
import MainView from "../../common/CustomMainView";
import { useFormik } from "formik";
import { loginValidation } from "../../Validation/AuthValidation";
import Colors from "../../config/Colors";

const Signing = ({ navigation }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  const { values, setFieldValue, errors, touched, handleChange, handleSubmit } =
    formik;

  return (
    <MainView>
      <View>
        <SvgXml xml={heuBlueLogo} />
        <View style={{ paddingVertical: 30 }}>
          <Text style={AuthFlowStyles.headerText}>Sign in into heu!</Text>
          <Text style={AuthFlowStyles.subHeaderText}>
            Welcome back. you’ve been missed!
          </Text>
        </View>
        <CustomTextInput
          placeholder="Enter Your Email"
          label="Email"
          value={values?.email}
          onChange={handleChange("email")}
          errors={touched.email && errors.email ? errors.email : null}
        />
        <CustomTextInput
          mainContainerStyle={AuthFlowStyles.passwordInput}
          placeholder="Enter your password"
          label="Password"
          eyeIconValue={true}
          value={values?.password}
          onChange={handleChange("password")}
          showPassword={visiblePassword}
          setShowPassword={setVisiblePassword}
          secureTextEntry={!visiblePassword}
          errors={touched.password && errors.password ? errors.password : null}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("forgotPassword")}
        >
          <Text style={[AuthFlowStyles.forgotPasswordText]}>
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
        primaryColor={gradientColors}
        btnStyle={{ position: "absolute", bottom: 30 }}
        onPress={() => {
          handleSubmit();
        }}
      />
    </MainView>
  );
};

export default Signing;
