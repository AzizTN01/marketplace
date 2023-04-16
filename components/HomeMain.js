import React,{useState} from 'react'
import { View ,
    SafeAreaView,
    Image,
    Text,
    ScrollView,
   
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
// import {} from "react-native-vector"
import CheckBox from '@react-native-community/checkbox';
import Feather from "react-native-vector-icons/Feather"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const HomeMain = ({}) => {
  const [checkboxval, setcheckboxval] = useState(false);
  const toggleCheckbox = () => {
    setcheckboxval(!checkboxval)
  }

  return (
<SafeAreaView 
   style={{ flex:1 }}>
   <View 
   style={{
      flex:1
      }}>
 <LinearGradient 
    colors={['#D7D3FF', 'white', 'white' ,'#D7D3FF']}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 0 }}
    locations={[0, 0.35, 0.65, 1]}
      style={{ flex:1}}
      >
       
       
     </LinearGradient>
   </View>
     
   </SafeAreaView>
);
}

export default HomeMain