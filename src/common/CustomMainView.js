import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CustomMainView = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};

export default CustomMainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 17,
    paddingHorizontal: 35,
    overflow: "hidden",
  },
});
