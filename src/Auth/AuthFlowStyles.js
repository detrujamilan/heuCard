import { StyleSheet } from "react-native";
import Colors from "../config/Colors";

export const AuthFlowStyles = StyleSheet.create({
  headerText: {
    fontFamily: "LeagueSpartan-Bold",
    fontSize: 32,
    color: Colors.Charcoal,
  },
  subHeaderText: {
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 16,
    color: Colors.lateGray,
  },
  forgotPasswordText: {
    textAlign: "right",
    paddingTop: 15,
    fontFamily: "LeagueSpartan-Medium",
    fontSize: 16,
    color: Colors.blackColor,
  },
  orSignInWithContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  orSignInWithText: {
    paddingHorizontal: 15,
    color: Colors.lateGray,
    fontFamily: "LeagueSpartan-Medium",
  },
  socialIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    fontFamily: "LeagueSpartan-Regular",
    color: Colors.lateGray,
    textAlign: "center",
    paddingTop: 30,
  },
  signUpLink: {
    fontFamily: "LeagueSpartan-SemiBold",
    color: Colors.BrightBlue,
  },
  borderStyle: {
    borderTopWidth: 1,
    flex: 1,
    borderColor: Colors.LightGray,
  },
  passwordInput: {
    paddingTop: 15,
  },
});
