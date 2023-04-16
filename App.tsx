
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
} from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import { ConnectWallet, ThirdwebProvider , useLogin} from "@thirdweb-dev/react-native";
//import LinearGradient from 'react-native-linear-gradient';
import Splash from './components/Splash';
 import OnBording from './components/OnBording';
 import Signup from './components/SignUp';
 import SuccessPage from './components/SuccessPage';
 import Home from './components/Home';
 import HomeMain from './components/HomeMain';
import SignUp from './components/SignUp';
import SingIn from './components/SingIn';
import Search from './components/Search';
import Navigation from './components/Navigation';




const App = () => {
  
  return (

  <ThirdwebProvider
   activeChain={'goerli'}
  >   
  < Navigation />

     {/* <NavigationContainer> 
    <Navigator/>
   </NavigationContainer> */}
  </ThirdwebProvider>
  );
}



export default App;
