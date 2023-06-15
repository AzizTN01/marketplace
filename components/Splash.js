import { useUser } from "@thirdweb-dev/react-native";
import React, { useEffect } from "react";
import { Image, SafeAreaView, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const Splash = ({ navigation }) => {
  const { user, isLoggedIn } = useUser();
  useEffect(() => {
    setTimeout(() => {
      if (!isLoggedIn) {
        navigation.replace('login')
      } else {
        navigation.replace('main')
      }

    }, 3 * 1000)
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <LinearGradient
          colors={["#4c4ec0", "#9fa0f6"]}
          start={{ x: 0.5, y: 1.0 }}
          end={{ x: 0.0, y: 0.0 }}
          style={{ flex: 1 }}
        >
          <View
            style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
          >
            <Image
              source={require("../assets/images/logo2.png")}
              style={{ width: 150, height: 150, justifyContent: "center" }}
            />
          </View>
        </LinearGradient>
      </View>
      {/* <Text>AAA</Text> */}
      {/* <Splash /> */}
    </SafeAreaView>
  );
};

export default Splash;
