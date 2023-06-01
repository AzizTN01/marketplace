import React,{useState} from 'react'
import { View ,
    Image,
    Text,
    TextInput,
    BackHandler,
    Button,
    SafeAreaView

} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useBuyNow, useContract, Web3Button ,lightTheme,useDirectListing,useAddress} from "@thirdweb-dev/react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
// import { ListingType } from "@thirdweb-dev/sdk";
import { useNavigation } from '@react-navigation/native';
import Feather from "react-native-vector-icons/Feather"



const Address ='0x245d1343EC0dE0dBE5730dD38D2fB6dfdecbfdaF';



const Mintnft = ({ route}) => {

    const { contract } = useContract(Address);
    function shortenString(inputString) {
   
          return inputString?.substring(0, 3) + "..." + inputString?.substring(inputString?.length - 3);
        
      };
   
     
  return (
    
<SafeAreaView style={{
    flex:1,
   backgroundColor:'red',
   marginBottom: '15%',
}}>
    <LinearGradient
        colors={['#D7D3FF', 'white', 'white' ,'#D7D3FF']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.35, 0.65, 1]}
          style={{ flex:1}}
    >
        <View style={{
            //backgroundColor: 'green',
            flex: 1,
            flexDirection:'column',
          // justifyContent:'center',
            alignContent:'center'
            
            
        }}>
            <View style={{
                width:'90%',
                height:'10%',
             //  backgroundColor:'red',
                margin: '5%',
               // flexDirection:'column',
                justifyContent:'center'
            }}>
                <Text style={{
                    color:'black',
                    fontSize:24,
                    fontWeight:600,
                    paddingLeft:'5%',
                }}>
                    Mint NFt
                </Text>

            </View>
            <View style={{
                width:'90%',
                height:'75%',
              // backgroundColor:'red',
                margin: '5%',
                flexDirection:'column',
               // justifyContent:'center'
            }}>
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
            }} name="smile" size={20} color={"rgba(153, 153, 167, 0.5)"} />
            <TextInput 
                placeholder="name of your NFT"
                placeholderTextColor={"rgba(153, 153, 167, 0.5)"}
                style={{
                  width:'100%',
                  paddingVertical: 8,
                  color:'black',
                  }}
                >
                </TextInput>
            </View>
                
                </View>
                </LinearGradient>
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
            }} name="smile" size={20} color={"rgba(153, 153, 167, 0.5)"} />
            <TextInput 
                placeholder="description of you're NFT "
                placeholderTextColor={"rgba(153, 153, 167, 0.5)"}
                style={{
                  width:'100%',
                  paddingVertical: 8,
                  color:'black',
                  }}
                >
                </TextInput>
            </View>
                
                </View>
                </LinearGradient>

            </View>
           
           

        </View>

    </LinearGradient>
  
</SafeAreaView>

);
}

export default Mintnft