import React,{useState} from 'react'
import { View ,
    Image,
    Text,
    TouchableOpacity,
    BackHandler,
    Button,
    SafeAreaView,
    TextInput,
    ActivityIndicator

} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useBuyNow, useContract, Web3Button ,lightTheme,useEnglishAuction,useAddress} from "@thirdweb-dev/react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Feather from "react-native-vector-icons/Feather"
// import { ListingType } from "@thirdweb-dev/sdk";

const Address ='0x8D3bc1C6B16c885Aa8F5241340De968F2F54A67f';



const CheckOutEnglish = ({ route}) => {
    const [amountBid, setamountBid] = useState(0);
    const [loading, setloading] = useState(false)
    function shortenString(inputString) {
   
          return inputString?.substring(0, 3) + "..." + inputString?.substring(inputString?.length - 3);
        
      };
    const id = route.params.id
    const { contract } = useContract(Address);
    const { mutateAsync: buyNow} = useBuyNow(contract);
    const currentaddress = useAddress();
    const { data:nfts } = useEnglishAuction(contract,id);
    const price =  nfts?.minimumBidCurrencyValue?.displayValue+ ' ' + nfts?.buyoutCurrencyValue.symbol;
    const name = nfts?.asset.name
    const user = shortenString(nfts?.creatorAddress) ;
    // const description =nfts?.asset.description;
    // const prop = nfts?.asset.properties;
    const listingId = nfts?.id
   
     
  return (
    
<SafeAreaView style={{
    flex:1,
   // backgroundColor:'red',
//    marginBottom: '15%',
}}>
    <LinearGradient
     colors={['#D7D3FF', 'white', 'white' ,'#D7D3FF']}
     start={{ x: 0, y: 1 }}
     end={{ x: 1, y: 0 }}
     locations={[0, 0.35, 0.65, 1]}
       style={{ flex:1}}
 
    >
<View style={{
    width:'100%',
    height:'10%',
    margin:'8%',
   // backgroundColor:'red'
}}>
    <Text style={{
        fontSize:24,
        fontWeight:600,
        color:'#131330'
        }}>
      Check out
    </Text>
</View>
<View style={{
    paddingVertical: "2%",
    paddingHorizontal: "8%"
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
            }} name="dollar-sign" size={20} color={"rgba(153, 153, 167, 0.5)"} />
            <TextInput 
                value={amountBid}
                onChangeText={(text)=> {
                    setamountBid(text)
                }}
                placeholder="Enter the amount of bid"
                placeholderTextColor={"rgba(153, 153, 167, 0.5)"}
                keyboardType='numeric'
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

<View style={{
    height:'30%',
    width:'85%',
   // backgroundColor:'red',
    alignSelf: "center",
}}>
 <LinearGradient
  
  colors={['#9fa0f6', '#9fa0f6', '#7f81f3' ,'#4C4EC0']}
  start={{x: 1.0, y: 0.0}}
   end={{x: 0.0, y: 1.0}}
   locations={[0, 0.25, 0.55, 1]}
 style={{
     flex:1,
   //  alignItems:'center',
     justifyContent:'space-evenly',
     backgroundColor:'#4C4EC0',
     borderRadius:12
 }}>
    <View style={{paddingLeft:'5%'}}>
    <Text style={{
        fontSize:14,
        fontWeight:600,
        color:'#fff'
    }}
    >
    You are about to purchase a {name} from {user}
    </Text>
    </View>

    <View style={{
        flexDirection:'row',
       // alignContent:'space-around',
       // alignItems:'center',
        justifyContent:'space-around',
        width:'100%'
    }}>
        <Text style={{
        fontSize:14,
        fontWeight:600,
        color:'#fff'
    }} >
            Bid Amount
        </Text>
        <Text style={{
        fontSize:14,
        fontWeight:600,
        color:'#fff'
    }} >
            {amountBid && amountBid !== "" ? `${amountBid} ${nfts?.buyoutCurrencyValue.symbol}`  : price ? price : <ActivityIndicator size={"small"} color={"white"} />}
        </Text>
    </View>

    <View style={{
        flexDirection:'row',
        alignContent:'space-around',
       // alignItems:'center',
        justifyContent:'space-around',
        width:'100%'
    }}>
        <Text style={{
        fontSize:14,
        fontWeight:600,
        color:'#fff'
    }} >
            Service fee 
        </Text>
        <Text style={{
        fontSize:14,
        fontWeight:600,
        color:'#fff'
    }} >
            0 ETH
        </Text>
    </View>
    

 </LinearGradient>
</View>
<View style={{
width:'100%',
// height:"15%",
flexDirection:'row',
justifyContent:'space-around',
// marginTop:'2%'s
}}>
    <Text  style={{
        fontSize:16,
        fontWeight:600,
        color:'black'
        
    }} >
        Total payment
    </Text>
    <Text  style={{
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    }} >
            {amountBid && amountBid !== "" ? `${amountBid} ${nfts?.buyoutCurrencyValue.symbol}`  : price ? price : <ActivityIndicator size={"small"} color={"white"} />}
    </Text>
</View>
 
 <View style={{
flexDirection:'column',
alignSelf:'stretch',
marginTop:'15%',
marginHorizontal: "15%",
// marginBottom:'2%',
// margin:'5%',
borderRadius: 15,
borderWidth: 3,
padding:3,
borderColor: "#7f81f3",
 }}>
 <Web3Button
                     contractAddress={Address}
                     theme="dark"
                      action={() =>
                        contract.englishAuctions.makeBid(amountBid,id)
                              }
                             onSuccess={(result) => alert("Success!")}
                             onError={(error) => {
                                console.error(error)
                                alert("Something went wrong!")}}
                               >
                               Bid Now
                                  
                  </Web3Button>
 </View>

</LinearGradient>
    
</SafeAreaView>

);
}

export default CheckOutEnglish