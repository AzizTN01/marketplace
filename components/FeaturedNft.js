import React,{useState} from 'react'
import { View ,
    Image,
    Text,
    TouchableOpacity

} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useBuyNow, useContract, Web3Button ,useDirectListings,useAddress} from "@thirdweb-dev/react-native";
import { useNavigation } from '@react-navigation/native';
// import { ListingType } from "@thirdweb-dev/sdk";

const Address ='0x8D3bc1C6B16c885Aa8F5241340De968F2F54A67f';


const FeaturedNft = ({title,artist,highestBid,currency,nft,owner,stat,item,navroute}) => {
    // console.warn(item)
    const { contract } = useContract(Address);
    const { mutateAsync: buyNow} = useBuyNow(contract);
   const { data:nfts } = useDirectListings(contract);
   const navigation = useNavigation();
    const currentaddress = useAddress();

   
     
  return (
<View style={{
    width:270,
    height:270,
    borderRadius:20,
    margin:10,
    marginLeft:0,
    marginRight:10,
    backgroundColor:'white'


}}>
                                   <TouchableOpacity onPress={() =>
                                  navigation.navigate(navroute,{
                                    item: item
                                  })
                                  }
                                  >
  <Image
         source={{uri:nft}}
         style={{
            alignSelf:'center',
            borderRadius:20,
            marginTop:10,
            height:150,
            width:250,
         }} 
         />
         </TouchableOpacity>
         <View style={{
         
            flex:1,
            marginLeft:20,
            marginRight:20,
            marginTop:10,
            

         }}>
            <View style={{
                flex:1,
             // backgroundColor:'yellow',
                flexDirection:'row',
               //marginBottom:'10',
                }}>
                    <View style={{
                flex:1,
               // backgroundColor:'green',
                }}>
                    <Text style={{
                        color:'#131330',
                        fontSize:18,
                        fontWeight:700,
                    }}>
                  {title}
                    </Text>
                    <Text style={{  
                        color:'#393B3E80',
                        fontSize:12,
                        fontWeight:400,
                        }}>by {artist}

                    </Text>
                    </View>
                    <View style={{
                flex:1,
               alignItems:'flex-end'
                
                }} >
                    <View style={{
                       // flex:1,
                      
                    }} >
                        <Text style={{  
                        color:'#393B3E80',
                        fontSize:10,
                        fontWeight:400,
                        }} >
                            Price
                        </Text>
                      
                    </View>  
                    <View style={{
                      //  flex:1,
                        }}>
                              <Text style={{  
                        color:'#393B3E80',
                        fontSize:12,
                        fontWeight:600,
                        }}>
                            {highestBid}
                        </Text>
                    </View>  
                    </View>
            </View>
            <View style={{
            height:20,
            }}>

            </View>
            <View style={{
                flex:1,
            
             flexDirection:'row'

                }}>
                    <View style={{
                        flex:1,
                        flexDirection:'row',
                        justifyContent:'flex-start'
                    }}>
                    <Ionicons style={{
            //  marginLeft:15,
             // marginRight: 4,
             // alignSelf:'center',
            }} name="cash-outline" size={22} color={"rgba(57, 59, 62, 1)"} />
              <Text style={{
                        color:'#393B3E',
                        fontSize:13,
                        fontWeight:400,
                        marginLeft: '10%',
                    }}>
                        
                        {currency}
                    </Text>

                    </View>
                  <View style={{
                //  backgroundColor:'red',
                    flex:1,
                  }}>
                    {stat !=0  &&
                    <View style={{
                       // backgroundColor:'red',
                        marginLeft:'10%',
                       // marginBottom: '40%'
                       alignSelf:'baseline',
                       backgroundColor:'#7f81f3'
                    }}>
                        
                    
                  </View>
                    }{stat==0 &&
                        <View style={{
                            //backgroundColor:'red',
                            alignSelf:'flex-end'
                        }}>

                    <Text style={{
                        color:'#393B3E',
                        fontSize:14,
                        fontWeight:600,
                        marginLeft: "45%",
                    }}>
                        Item Sold!
                    </Text>

                        </View>

                    }
                    {owner== currentaddress &&
                       <View style={{
                            //backgroundColor:'red',
                            alignSelf:'flex-end'
                        }}>

                    <Text style={{
                        color:'#393B3E',
                        fontSize:14,
                        fontWeight:600,
                        marginLeft: "45%",
                    }}>
                       You own this nft
                    </Text>

                        </View>

                    }
               
                    
                  </View>
                  {/* style={{
                    backgroundColor:'#5F61F0',
                   
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:10,
                    width:'70%',
                    height:'60%',
                    alignSelf:'flex-end'

                  }} */}
                    

            </View>
            
            
         </View>
</View>
);
}

export default FeaturedNft