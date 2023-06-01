import React,{useState} from 'react'
import { View ,
    SafeAreaView,
    Image,
    Text,


} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
// import {} from "react-native-vector"

import { 
   ConnectWallet,
  metamaskWallet,
  useContract,
  useAddress,
  useContractMetadata,
  useDirectListings,
  useUser

} from "@thirdweb-dev/react-native";

import Navigation from './Navigation';

const Address ='0x8D3bc1C6B16c885Aa8F5241340De968F2F54A67f';

const SingIn = ({}) => {
  const [checkboxval, setcheckboxval] = useState(false);
  const toggleCheckbox = () => {
    setcheckboxval(!checkboxval)
    
  }
  const { user  , isLoggedIn  } = useUser();

  const { contract } = useContract(Address);
  const { data:Metadata } = useContractMetadata(contract);
  const adress =useAddress();
  const { data:nft, isLoading, } = useDirectListings(contract);
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
           ConnectWallet to continue 
         </Text>
       
         {/* <Web3Button
      contractAddress="0x44670A993D3d2D4cA58cb37D8C645992a067679A" // Your smart contract address
      action={(contract) => contract.ContractURI()}// Logic to execute when clicked
    >
      Execute Action
    </Web3Button> */}
         
         {/* <LinearGradient 
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
                </LinearGradient> */}
           
               

                
                {/* <LinearGradient 
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
                </LinearGradient> */}
            
                {/* <View style={{
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
                </View> */}
<View style={{ alignSelf:'center' }}>
               
             
             <View style={{margin:'10%'}}>
              
             { contract &&(
          // <View style={{backgroundColor:'#fff'}}> </View>
          <View>      
           <Text style={{
            fontSize:20,
            color:'black'
            }} >
            connected 
          </Text>
          
          <ConnectWallet  />
          
          </View>

        )
        }
        { !contract &&(
         <ConnectWallet />
        )
        }
             </View>
           
              </View>
              {/* <Text  style={{
                color:'#A49BFE',
                fontSize:14,
                marginTop:15,
                textAlign:'center'
                }}>
                Forgot Password?
              </Text> */}
              {/* <View style={{
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
              </View> */}

             
                
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