import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../config/Colors";
import Feather from "@expo/vector-icons/Feather";

const CustomTextInput = ({
  label,
  onChange,
  keyboardType,
  secureTextEntry,
  value,
  eyeIconValue = false,
  placeholder,
  textInputStyle,
  textLabelStyle,
  mainContainerStyle,
  showPassword,
  setShowPassword,
}) => {
  return (
    <>
      <View style={mainContainerStyle}>
        {label && (
          <Text style={[styles.labelStyle, { textLabelStyle }]}>{label}</Text>
        )}
        <TextInput
          onChange={onChange}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          value={value}
          style={[styles.textInput, { textInputStyle }]}
          placeholderTextColor={Colors.LightGray}
          placeholder={placeholder}
        />
        {eyeIconValue && (
          <TouchableOpacity activeOpacity={0.3} style={styles.eyeStyle}>
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    fontFamily: "LeagueSpartan-Regular",
    borderColor: Colors.LightGray,
    borderWidth: 1,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    color: Colors.Charcoal,
    width: "100%",
  },
  labelStyle: {
    fontFamily: "LeagueSpartan-Regular",
    color: Colors.blackColor,
    fontSize: 16,
    marginBottom: 5,
  },
  eyeStyle: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});
