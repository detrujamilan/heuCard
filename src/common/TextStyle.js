import { StyleSheet } from "react-native";
import Colors from "../config/Colors";

export const TextStyle = StyleSheet.create({
  headerTxt: {
    fontSize: 32,
    fontFamily: "LeagueSpartan-Bold",
    color: Colors.Charcoal,
  },
  normalTxt: {
    color: Colors.lateGray,
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 16,
  },
});
