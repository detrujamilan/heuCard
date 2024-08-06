import { View, Text, ScrollView } from "react-native";
import React from "react";
import MainView from "../../common/CustomMainView";
import Colors from "../../config/Colors";
import { SvgXml } from "react-native-svg";
import { HeuWhiteLogo } from "../../assets/img/Images";
import { LinearGradient } from "expo-linear-gradient";
import { TextStyle } from "../../common/TextStyle";

const AppPermissions = () => {
  return (
    <LinearGradient
      colors={[Colors.RoyalBlue, Colors.CeruleanBlue]}
      style={{ flex: 1 }}
      start={[0, 0]}
      end={[0, 1]}
    >
      <MainView statusBarProps={{ backgroundColor: Colors.RoyalBlue }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ paddingTop: 30 }}>
            <SvgXml xml={HeuWhiteLogo} />
            <View style={{ paddingTop: 50 }}>
              <Text
                style={[
                  TextStyle.headerTxt,
                  { color: Colors.whiteColor, lineHeight: 32 },
                ]}
              >
                Allow Permissions for{"\n"}Enhanced Experience
              </Text>
              <Text
                style={[
                  TextStyle.normalTxt,
                  {
                    color: Colors.whiteColor,
                    lineHeight: 22,
                    paddingTop: 6,
                  },
                ]}
              >
                These permissions help us deliver personalized and{"\n"}relevant
                features, ensuring you get the most out of our app.
              </Text>
            </View>
          </View>
        </ScrollView>
      </MainView>
    </LinearGradient>
  );
};

export default AppPermissions;
