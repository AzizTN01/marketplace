import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import Navigator from "./Navigator";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./Splash";
import SingIn from "./SingIn";
const MainStack = createStackNavigator();

const Navigation = ({}) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="splash" component={Splash} />
        <MainStack.Screen name="login" component={SingIn} />
        <MainStack.Screen name="main" component={Navigator} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
