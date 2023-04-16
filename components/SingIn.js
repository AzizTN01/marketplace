import React,{useState} from 'react'
import { View ,
    SafeAreaView,
    Image,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Button
    

} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
// import {} from "react-native-vector"
import CheckBox from '@react-native-community/checkbox';
import Feather from "react-native-vector-icons/Feather"
import { useContract ,useLogin,Web3Button} from "@thirdweb-dev/react-native";

import Navigation from './Navigation';



const SingIn = ({}) => {
  const [checkboxval, setcheckboxval] = useState(false);
  const toggleCheckbox = () => {
    setcheckboxval(!checkboxval)
    
  }
  const { isLoading, login } = useLogin();
  const adress = console.log(useLogin)
  const { contract } = useContract("0x44670A993D3d2D4cA58cb37D8C645992a067679A", "marketplace")

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
       <View 
       style={{
        flex:1
          }}>
            <View 
            style={{
                flex:1,
                marginTop: '8%',   
                alignItems:'center',
                justifyContent:"flex-start", 
            }}
            >
                 <Image
         source={require('../assets/images/logo_v.png')}
         style={{
            width:120,
            height:120,
            justifyContent:'flex-start',
         }} 
         />
            </View>
            <View 
            style={{
                // backgroundColor:'blue',
                flex:3,
                paddingHorizontal:'12%'
                // justifyContent:'center',
                // alignSelf:'center'
                // alignItems:'center',
             
            }}
            >
          <Text style={{
           color:'#454459',
           textAlign:'center',
          //  padding:10,
           fontSize:18
         }}>
            Sign In to continue 
         </Text>
         <KeyboardAvoidingView>
         {/* <Web3Button
      contractAddress="0x44670A993D3d2D4cA58cb37D8C645992a067679A" // Your smart contract address
      action={(contract) => contract.ContractURI()}// Logic to execute when clicked
    >
      Execute Action
    </Web3Button> */}
         
         <LinearGradient 
         colors={[
          "#A49BFE80",
          "#5F61F080"
         ]}
         style={{
          flexDirection:'row',
          // backgroundColor: 'yellow',
          borderColor:'transparent',
          borderWidth: 1,
          borderRadius:10,
          marginTop:20,
          // marginBottom:5,
        }}>
          <View style={{
            // backgroundColor:'red',
            // padding:1,
            borderColor:'transparent',
            borderWidth: 1,
            borderRadius:10,
            width:'100%',
            flexDirection:'row'
          }}>
            <View style={{                     
            backgroundColor:'white',
            flexDirection:'row',
            width:'100%',
            borderRadius:10,
 }}>

<Feather style={{
              marginLeft:15,
              marginRight: 4,
              alignSelf:'center',
            }} name="mail" size={20} color={"rgba(153, 153, 167, 0.5)"} />
            <TextInput 
                placeholder="Your Email"
                placeholderTextColor={"rgba(153, 153, 167, 0.5)"}
                style={{
                  width:'100%',
                  paddingVertical: 8,
                  }}
                >
                </TextInput>
            </View>
                
                </View>
                </LinearGradient>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView>

                
                <LinearGradient 
         colors={[
          "#A49BFE80",
          "#5F61F080"
         ]}
         style={{
          flexDirection:'row',
          // backgroundColor: 'yellow',
          borderColor:'transparent',
          borderWidth: 1,
          borderRadius:10,
          marginTop:10,
          // marginBottom:5,
        }}>
          <View style={{
            // backgroundColor:'red',
            // padding:1,
            borderColor:'transparent',
            borderWidth: 1,
            borderRadius:10,
            width:'100%',
            flexDirection:'row'
          }}>
            <View style={{                     
            backgroundColor:'white',
            flexDirection:'row',
            width:'100%',
            borderRadius:10,
 }}>

            <Feather style={{
              marginLeft:15,
              marginRight: 4,
              alignSelf:'center',
            }} name="lock" size={20} color={"rgba(153, 153, 167, 0.5)"} />
            <TextInput 
                placeholder="Your Password"
                placeholderTextColor={"rgba(153, 153, 167, 0.5)"}
                style={{
                  width:'100%',
                  paddingVertical: 8,
                  }}
                >
                </TextInput>
            </View>
                
                </View>
                </LinearGradient>
                </KeyboardAvoidingView>
                <View style={{
                    borderColor:'#9999A7',
                   flexDirection:'row',
                   justifyContent:'space-around',
                    padding:26,
                    paddingLeft:0,
                    alignSelf:'flex-start',
                   
                    
                }}>
                <CheckBox 
                disabled={false}
                value={checkboxval}
                onChange={toggleCheckbox}
                tintColor={"red"}
                onFillColor={"red"}
                tintColors={{true: '#A49BFE80', false: '#A49BFE80'}} 
               />
               <Text style={{
                alignSelf:'center',
                fontSize:14,
                color:'#9999A7',
                }} >
                Remember Password
               </Text>
                </View>
<View style={{ alignSelf:'center' }}>
               
              
              <TouchableOpacity  
              onPress={() => {
                 const token = login();
                 }} >
              {/* <ConnectWallet /> */}
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
              {/* <Text style={{
                color:'#ffffff',
                fontSize:18,
                }}>
                Sign In
              </Text > */}
              <Button      
              title={isLoading ? "Loading..." : "Sign "} 
              onPress={() => {   
                 const token = login();
      }}
      style={{
        backgroundColor:'transparent'
        }} />
              </LinearGradient>
              </TouchableOpacity>
              
              </View>
              <Text  style={{
                color:'#A49BFE',
                fontSize:14,
                marginTop:15,
                textAlign:'center'
                }}>
                Forgot Password?
              </Text>
              <View style={{
                // backgroundColor:'red',
                // flex:1,
                // marginTop:'30px',
                alignSelf:'center',
                flexDirection:'row',
                justifyContent:'center',
                // alignItems:'center',
                marginTop:"15%",

              }}>
                <Text style={{
                    // padding:10,
                    fontSize:14,
                    color:'#393B3E',
                    textAlign:'center',

                }}>
                    Dont Have Any acount?
                </Text>
                <Text style={{
                      fontSize:14,
                      color:'#7F81F3',
                      fontWeight:'bold',
                      marginLeft:'1%'
                      // alignSelf:'center'
  
                }}>
                     Register now
                </Text>
              </View>

             
                
            </View>
       
       </View>

     </LinearGradient>
   </View>
     {/* <Text>AAA</Text> */}
     {/* <Splash /> */}
   </SafeAreaView>
);
}

export default SingIn