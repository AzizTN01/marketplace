import React,{useState} from 'react'
import { View ,
    Image,
    Text,
    TouchableOpacity,
    BackHandler,
    Button,
    SafeAreaView

} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useBuyNow, useContract, Web3Button ,useDirectListing,useEnglishAuction,useAddress} from "@thirdweb-dev/react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
// import { ListingType } from "@thirdweb-dev/sdk";

const Address ='0x8D3bc1C6B16c885Aa8F5241340De968F2F54A67f';

// const details = () => {
//     return(
//         <View>
//             <Text>
//                 helo
//             </Text>
//         </View>
//     )
// };



const NftCheckOut = ({ route}) => {

    function shortenString(inputString) {
   
          return inputString?.substring(0, 3) + "..." + inputString?.substring(inputString?.length - 3);
        
      };
    const id = route.params.id
    const { contract } = useContract(Address);
    const { mutateAsync: buyNow,error} = useBuyNow(contract);
    const currentaddress = useAddress();
    const { data:nfts,error:err } = useDirectListing(contract,id);
    const price =  nfts?.currencyValuePerToken.displayValue+ ' ' + nfts?.currencyValuePerToken.symbol;
    const name = nfts?.asset.name
    const user = shortenString(nfts?.creatorAddress) ;
    const description =nfts?.asset.description;
    const prop = nfts?.asset.properties;
    const listingId = nfts?.id
   
     
  return (
    
<SafeAreaView style={{
    flex:1,
    //backgroundColor:'red',
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
    width:'100%',
    height:'10%',
    margin:'8%'
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
            Item Price
        </Text>
        <Text style={{
        fontSize:14,
        fontWeight:600,
        color:'#fff'
    }} >
            {price}
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
height:"15%",
flexDirection:'row',
justifyContent:'space-around',
marginTop:'5%'
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
        {price}
    </Text>
</View>
 
 <View style={{
flexDirection:'column',
alignSelf:'stretch',
marginTop:'30%',
marginBottom:'2%',
margin:'5%',
borderRadius: 15,
borderWidth: 3,
padding:3,
borderColor: "#7f81f3",
 }}>
 <Web3Button
      contractAddress={Address}
      action={() =>
        buyNow({
          id: id, // ID of the listing to buy
          type: Direct (0), // Direct (0) or Auction (1)
          buyAmount: "1", // Amount to buy
         //{{wallet_address}}", // Wallet to buy for, defaults to current wallet
        })
        
      }onError={(error) => {
        console.error(error)
        alert(error)}}
    >
      Buy Now
    </Web3Button>
 </View>

</LinearGradient>
    
</SafeAreaView>

);
}

export default NftCheckOut