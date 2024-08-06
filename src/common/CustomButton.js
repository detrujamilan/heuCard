import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../config/Colors";

export const gradientColors = [
  "#0495F1",
  "#0494F1",
  "#0494F1",
  "#0493F1",
  "#0492F1",
  "#0491F1",
  "#0490F1",
  "#048FF1",
  "#048EF1",
  "#048DF1",
  "#048CF1",
  "#048BF1",
  "#048AF1",
  "#0489F1",
  "#0488F1",
  "#0487F1",
  "#0486F1",
  "#0485F1",
  "#0484F1",
  "#0484F1",
  "#0483F1",
  "#0482F0",
  "#0481F0",
  "#0480F0",
  "#047FF0",
  "#047EF0",
  "#047DF0",
  "#047CF0",
  "#047BF0",
  "#047AF0",
  "#0479F0",
  "#0478F0",
  "#0477F0",
];

const CustomButton = ({
  title,
  btnStyle,
  primaryColor,
  mainButtonCtn,
  onPress,
}) => {
  return (
    <View style={[mainButtonCtn, { flex: 1 }]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={[styles.buttonContainer, btnStyle]}
      >
        <LinearGradient
          colors={primaryColor}
          start={[0, 0]}
          end={[1, 0]}
          style={[styles.button]}
        >
          <Text style={styles.buttonTxt}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonTxt: {
    textAlign: "center",
    color: Colors.whiteColor,
    fontFamily: "LeagueSpartan-Medium",
    fontSize: 18,
  },
  buttonContainer: {
    width: "100%",
  },
});
