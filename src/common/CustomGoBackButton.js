import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "../config/Colors";
import Entypo from "@expo/vector-icons/Entypo";

const CustomGoBackButton = ({
  labelText,
  labelType = false,
  onPressGoBack,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={onPressGoBack}
          activeOpacity={0.6}
          style={{
            backgroundColor: "rgba(4, 109, 240, 0.15)",
            borderRadius: 40,
            width: 34,
            height: 34,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        {labelType && (
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={style.labelTxt}>{labelText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomGoBackButton;

const style = StyleSheet.create({
  labelTxt: {
    color: Colors.Charcoal,
    fontSize: 18,
    fontFamily: "LeagueSpartan-Medium",
  },
});
