import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const MainView = ({ children, style, statusBarProps, ctnStyle }) => {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <StatusBar {...statusBarProps} />
      <View style={[styles.container, { paddingHorizontal: 35 }, ctnStyle]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default MainView;
