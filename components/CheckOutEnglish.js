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
//import {} from "@third"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useBuyNow, useContract, Web3Button ,lightTheme,useEnglishAuction,useAddress,useMakeBid,useContractWrite, useValidEnglishAuctions, useNFT} from "@thirdweb-dev/react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from "react-native-vector-icons/Feather";
// import { NFT } from '@thirdweb-dev/sdk';
import Navigation from './Navigation';
import { CONTRACT_ABI } from '../utils/ContractABI';
import { MARKETPLACE_ADDRESS, NFT_COLLECTION_ADDRESS } from '../utils/contract';
// import { ListingType } from "@thirdweb-dev/sdk";

// const Address ='0x8D3bc1C6B16c885Aa8F5241340De968F2F54A67f';



const CheckOutEnglish = ({ route}) => {
    const { contract: marketplace, isLoading: loadingMarketplace } = 
    useContract(
        MARKETPLACE_ADDRESS, 
        "marketplace-v3"
    );
    const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

const {id,item} = route.params
console.warn(item)
const [amountBid, setamountBid] = useState(0);
console.warn(item.tokenId)

    const { data: auctionListing, isLoading: loadingAuction } =
    useValidEnglishAuctions(marketplace, {
        tokenContract: NFT_COLLECTION_ADDRESS,
        tokenId: item.tokenId,
    });


    // async function buyListing() {
    //     let txResult;

    //     //Add for auction section
    //     if (auctionListing?.[0]) {
    //         txResult = await marketplace?.englishAuctions.buyoutAuction(
    //             auctionListing[0].id
    //         );
    //     } else {
    //         throw new Error("No listing found");
    //     }

    //     return txResult;
    // }

    function shortenString(inputString) {
        return inputString?.substring(0, 3) + "..." + inputString?.substring(inputString?.length - 3);
    };
    const { contract } = useContract(MARKETPLACE_ADDRESS,CONTRACT_ABI);
    // const { mutateAsync: buyNow} = useBuyNow(contract);
    const currentaddress = useAddress();
    const { data:nfts } = useEnglishAuction(contract,id);
    const price =  item?.minimumBidCurrencyValue?.displayValue+ ' ' + item?.buyoutCurrencyValue.symbol;
    const name = item?.asset.name
    const user = shortenString(item?.creatorAddress) ;
    const description =item?.asset.description;
    const prop = item?.asset.properties;
   const  Navigation= useNavigation();
    const listingId = item?.id
    // const { mutateAsync: makeBid, isLoading, error } = useMakeBid(contract);   //const makeBid = useMakeBid(contract)
    //   console.error(makeBid)
   
    //   const handleBid = async () => {
    //    // const makeBid = useMakeBid(contract)
    //     try {
    //         const placeBid = makeBid.placeBid
    //     await placeBid(1);
    //    // console.warn(make)
    //     //console.warn("success")
    // }catch(err) {
    //     console.error(makeBid)
    //     console.error(err)
    // }
    //   }
     
    //   const { mutateAsync: bidInAuction} = useContractWrite(contract, "bidInAuction")

//   const call = async () => {
//     try {
//       const data = await bidInAuction({ args: [_auctionId, _bidAmount] });
//       console.info("contract call successs", data);
//     } catch (err) {
//       console.error("contract call failure", err);
//     }
//   }

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
    height:'30%',
    width:'85%',
    //backgroundColor:'red',
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
    paddingVertical: "2%",
    paddingHorizontal: "8%",
    //backgroundColor:'red'
    
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
            {amountBid && amountBid !== "" ? `${amountBid} ${item?.buyoutCurrencyValue.symbol}`  : price ? price : <ActivityIndicator size={"small"} color={"white"} />}
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
marginVertical:'5%'
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
    {amountBid && amountBid !== "" ?
        `${amountBid} ${item?.buyoutCurrencyValue.symbol}` : 
        price ?
        price : 
        <ActivityIndicator size={"small"} color={"white"} />
    }
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
                     contractAddress={MARKETPLACE_ADDRESS}
                     theme="dark"
                        action={async () => await marketplace?.englishAuctions.makeBid(
                                auctionListing[0].id,
                                amountBid
                            )}
                             onSuccess={(result) => {
                                Navigation.navigate("Success")
                                // alert("Success!",result)
                             }}
                             onError={(error) => {
                              Navigation.navigate('Error')
                              alert(error)
                             }}
                               >
                               Bid Now
                                  
                  </Web3Button>
                  {/* <TouchableOpacity onPress={async ()=>{
                   await handleBid()}}>
<Text>bid Now</Text>
                  </TouchableOpacity> */}
 </View>

</LinearGradient>
    
</SafeAreaView>

);
}

export default CheckOutEnglish