import React,{useState} from 'react'
import { View ,
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
   
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
// import {} from "react-native-vector"
import CheckBox from '@react-native-community/checkbox';
import Feather from "react-native-vector-icons/Feather"
import { useNavigation } from '@react-navigation/native';

const Error = ({}) => {
  const [checkboxval, setcheckboxval] = useState(false);
  const toggleCheckbox = () => {
    setcheckboxval(!checkboxval)
  }
  const navigation = useNavigation();
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
        <View style={{
            flex:1,
            //backgroundColor:'red',
            marginTop:'15%',
            marginBottom:'15%',
            margin:'10%',
           
        }}>
            <View style={{
                //backgroundColor:'yellow',
                flex:1,
                alignItems:'center',
                justifyContent:"flex-start", 
            
                
            }}>
                 <Image
         source={require('../assets/images/eroor3.png')}
         style={{
            width:200,
            height:200,
            justifyContent:'flex-start',
         }} 
         />
            </View >
            <View style={{
               // backgroundColor:'green',
                flex:1,
               // paddingHorizontal:'2%',
               alignItems:'center',
                
            }}>
                <View style={{ 
                   // backgroundColor:'red',
                    width:'100%',
                    alignItems:'center',
                    marginTop:'10%',
                    justifyContent:"center"
                }}>
                    <Text  style={{
                        fontSize:24,
                        fontWeight:500,
                        color:'#454459'
                        
                    }}>
                       Oops! Eroor
                    </Text>
                    <Text  style={{
                        fontSize:14,
                        fontWeight:500,
                        color:'#9E9E9E',
                        marginTop:'5%',
                        marginBottom:'1%',
                        margin:'5%',
                        textAlign:'center'
                        
                    }}>
                       Looks like Something went wrong please try later 
                    </Text>
                </View>
               
                <View style={{
                    marginTop:'20%'
                }}>
                    <TouchableOpacity
                 //  onPress={ navigation.navigate('Home')}
                     >
                    <LinearGradient 
              colors={['#4C4EC0','#9fa0f6']} 
              start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}}
              style={{ 
                backgroundColor:'#7f81f3',
                width:285,
                height:55,
                alignItems:'center',
                justifyContent:'center',
                borderRadius:10,
                marginTop:5,
                marginBottom:10,
              }}>
              <Text style={{
                color:'#ffffff',
                fontSize:18,
                }}>
                Go To Home
              </Text >
              </LinearGradient>
                    </TouchableOpacity>
                
                </View>

            </View>

        </View>
   
     </LinearGradient>
   </View>
     
   </SafeAreaView>
);
}

export default Error