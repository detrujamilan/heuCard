import { StyleSheet } from "react-native";
import Colors from "../../config/Colors";

export const SignupStyle = StyleSheet.create({
  privacyContainer: {
    flexDirection: "row",
  },
  ConditionTxt: {
    fontSize: 14,
    color: Colors.lateGray,
    fontFamily: "LeagueSpartan-Regular",
    marginLeft: 3,
  },
  termsConditions: {
    fontSize: 14,
    color: Colors.BrightBlue,
    fontFamily: "LeagueSpartan-SemiBold",
  },
  checkBox: {
    borderRadius: 4,
  },
  orSignInWithContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 25,
  },
  borderStyle: {
    borderTopWidth: 1,
    flex: 1,
    borderColor: Colors.LightGray,
  },
  orSignInWithText: {
    paddingHorizontal: 15,
    color: Colors.lateGray,
    fontFamily: "LeagueSpartan-Medium",
  },
  signUpText: {
    fontFamily: "LeagueSpartan-Regular",
    color: Colors.lateGray,
    textAlign: "center",
  },
  signUpLink: {
    fontFamily: "LeagueSpartan-SemiBold",
    color: Colors.BrightBlue,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
});
