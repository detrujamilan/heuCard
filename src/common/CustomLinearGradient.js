import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../config/Colors";

const CustomLinearGradient = ({ children, container }) => {
  return (
    <>
      <StatusBar backgroundColor={Colors.RoyalBlue} />
      <LinearGradient
        colors={["#4598FF", "#014DAC"]}
        style={styles.background}
        start={[0, 0]}
        end={[0, 1]}
      >
        <View style={container}>{children}</View>
      </LinearGradient>
    </>
  );
};

export default CustomLinearGradient;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
