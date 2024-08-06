import React, { useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../config/Colors";
import Feather from "@expo/vector-icons/Feather";

const CustomTextInput = ({
  label,
  onChange,
  keyboardType = "default",
  secureTextEntry = false,
  value = "",
  eyeIconValue = false,
  placeholder = "",
  textInputStyle,
  textLabelStyle,
  mainContainerStyle,
  showPassword,
  setShowPassword,
  errors
}) => {
  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, [setShowPassword]);

  return (
    <View style={[styles.mainContainer, mainContainerStyle]}>
      {label && <Text style={[styles.label, textLabelStyle]}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <TextInput
          onChangeText={onChange}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          value={value}
          style={[styles.input, textInputStyle]}
          placeholder={placeholder}
          placeholderTextColor={Colors.LightGray}
          accessibilityLabel={label}
        />
        {eyeIconValue && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={toggleShowPassword}
            accessibilityRole="button"
            accessibilityLabel={showPassword ? "Hide password" : "Show password"}
          >
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
      { errors && (
          <Text
            style={{
              color: Colors.errorColor,
              fontSize: 12,
              fontFamily: "LeagueSpartan-Regular",
              paddingTop: 3,
            }}
          >
            {errors}
          </Text>
        )}
    </View>
  );
};



export default React.memo(CustomTextInput);

const styles = StyleSheet.create({
  
  label: {
    fontFamily: "LeagueSpartan-Regular",
    color: Colors.blackColor,
    fontSize: 16,
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    fontFamily: "LeagueSpartan-Regular",
    borderColor: Colors.LightGray,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    color: Colors.Charcoal,
    width: "100%",
    paddingRight: 50,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
