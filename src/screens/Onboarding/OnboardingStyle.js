import { StyleSheet } from "react-native";
import Colors from "../../config/Colors";

export const OnboardingStyle = StyleSheet.create({
  btnStyle: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.BrightBlue,
    paddingHorizontal: 24,
    height: 34,
    justifyContent: "center",
  },
  btnTitle: {
    fontFamily: "LeagueSpartan-SemiBold",
    color: Colors.BrightBlue,
    fontSize: 16,
  },
  selectTxt: {
    fontFamily: "LeagueSpartan-Bold",
    fontSize: 31,
    color: Colors.Charcoal,
    lineHeight: 34,
  },
});
