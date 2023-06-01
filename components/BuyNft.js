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
import { useBuyNow, useContract, Web3Button ,lightTheme,useDirectListing,useAddress} from "@thirdweb-dev/react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
// import { ListingType } from "@thirdweb-dev/sdk";
import { useNavigation } from '@react-navigation/native';

import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

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



const Buynft = ({ route}) => {

    function shortenString(inputString) {
   
          return inputString?.substring(0, 3) + "..." + inputString?.substring(inputString?.length - 3);
        
      };
    const id = route.params.id
    const { contract } = useContract(Address);
    const { mutateAsync: buyNow} = useBuyNow(contract);
    const currentaddress = useAddress();
    const { data:nfts,isLoading:loading  } = useDirectListing(contract,id);
    const price =  nfts?.currencyValuePerToken.displayValue + ' ' + nfts?.currencyValuePerToken.symbol;
    const name = 'By '+nfts?.asset.name
    const user = shortenString(nfts?.creatorAddress) ;
    const description =nfts?.asset.description;
    const prop = nfts?.asset.properties;
    const listingId = nfts?.id;
    const navigation = useNavigation();
     
  return (
    
<SafeAreaView style={{
    flex:1,
   // backgroundColor:'red',
   marginBottom: '15%',
}}>
    <LinearGradient
     colors={['#D7D3FF', 'white', 'white' ,'#D7D3FF']}
     start={{ x: 0, y: 1 }}
     end={{ x: 1, y: 0 }}
     locations={[0, 0.35, 0.65, 1]}
       style={{ flex:1}}
 
    >

  
 
 <Image
         source={{uri:nfts?.asset.image}}
         style={{
        //    alignSelf:'center',
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
          //  marginTop:10,
            height:'50%',
            width:'100%',
         }} 
         />

         {/* <Button title='pressme' onPress={()=>
        console.log(id)
        }/> */}
    
      <View style={{
            height:'8%',
            width:'100%',
           // backgroundColor:'green',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'flex-end',
            //paddingTop:'2%',
        }}>
             <View style={{
                        height:'100%',
                        width:'30%',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor:'white',
                        marginRight:'8%'
                       // padding: 10,
                    }}>
                     <Text style={{
                        color:'rgba(57, 59, 62, 0.5)',
                        fontSize:14,
                        fontWeight:600,
                        marginLeft: '10%',
                    }}>
                        
                        Reserve Price
                    </Text>

              <Text style={{
                        color:'#2D8EFF',
                        fontSize:16,
                        fontWeight:700,
                        marginLeft: '10%',
                      //  backgroundColor:'red'
                    }}>
                        {loading &&
                          <ContentLoader 
                          speed={2}
                          width={100}
                          height={20}
                          viewBox="0 0 100 20"
                          backgroundColor="#f3f3f3"
                          foregroundColor="#d6d6d6"
                         
                        >
                          <Rect x="0" y="0" rx="3" ry="3" width="67" height="11" /> 
                          <Rect x="76" y="0" rx="3" ry="3" width="140" height="11" /> 
                          <Rect x="127" y="48" rx="3" ry="3" width="53" height="11" /> 
                          <Rect x="187" y="48" rx="3" ry="3" width="72" height="11" /> 
                          <Rect x="18" y="48" rx="3" ry="3" width="100" height="11" /> 
                          <Rect x="0" y="71" rx="3" ry="3" width="37" height="11" /> 
                          <Rect x="18" y="23" rx="3" ry="3" width="140" height="11" /> 
                          <Rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
                        </ContentLoader>
                      
                      }
                       {!loading && price}
                    </Text>

                    </View>
           

        </View>
      

       <ScrollView>

       
        <View style={{
          
            width:'75%',
            backgroundColor:'white',
            alignSelf:'center',
            flexDirection:'column',
            borderRadius: 20,
            padding:'2%',
            justifyContent:'space-around'
        }}>
            <View style={{
            }}>
                <Text style={{
                    fontSize:18,
                    fontWeight:600,
                    color:'#393A90'
                }}>
                    {loading &&
                    <ContentLoader 
                    speed={2}
                    width={100}
                    height={20}
                    viewBox="0 0 100 20"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#d6d6d6"
                   
                  >
                    <Rect x="0" y="0" rx="3" ry="3" width="67" height="11" /> 
                    <Rect x="76" y="0" rx="3" ry="3" width="140" height="11" /> 
                    <Rect x="127" y="48" rx="3" ry="3" width="53" height="11" /> 
                    <Rect x="187" y="48" rx="3" ry="3" width="72" height="11" /> 
                    <Rect x="18" y="48" rx="3" ry="3" width="100" height="11" /> 
                    <Rect x="0" y="71" rx="3" ry="3" width="37" height="11" /> 
                    <Rect x="18" y="23" rx="3" ry="3" width="140" height="11" /> 
                    <Rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
                  </ContentLoader>
                
                }
                    {!loading&& name}
                </Text>
                <Text style={{
                    fontSize:14,
                    fontWeight:400,
                    color:'#A1A4B3'
                }}>
                   {!loading&&  user }
                   {loading &&
                    <ContentLoader 
                    speed={2}
                    width={100}
                    height={20}
                    viewBox="0 0 100 20"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#d6d6d6"
                   
                  >
                    <Rect x="0" y="0" rx="3" ry="3" width="67" height="11" /> 
                    <Rect x="76" y="0" rx="3" ry="3" width="140" height="11" /> 
                    <Rect x="127" y="48" rx="3" ry="3" width="53" height="11" /> 
                    <Rect x="187" y="48" rx="3" ry="3" width="72" height="11" /> 
                    <Rect x="18" y="48" rx="3" ry="3" width="100" height="11" /> 
                    <Rect x="0" y="71" rx="3" ry="3" width="37" height="11" /> 
                    <Rect x="18" y="23" rx="3" ry="3" width="140" height="11" /> 
                    <Rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
                  </ContentLoader>
                
                }
                   
                </Text>
                </View>
                <View>

               
                <Text style={{
                    fontSize:18,
                    fontWeight:600,
                    color:'#393A90'
                }}>
                    Description
                </Text>
               {description && 
                <Text style={{
                    fontSize:14,
                    fontWeight:400,
                    color:'#A1A4B3'
                }}>
                    {
                    description
                    }
                </Text>
                }
                {!description &&
                 <Text style={{
                    fontSize:14,
                    fontWeight:400,
                    color:'#A1A4B3'
                }}>
                   No description availble
                </Text>

                }
                 </View>
            


        </View>
     
                  <View style={{
            flexDirection:'row',
            justifyContent:'space-around',
            marginTop:'3%',
            marginBottom: '5%',
          // backgroundColor:'red'
            
            
        }}>
        {nfts?.creatorAddress != currentaddress &&
 <View  style={{
    alignSelf:'stretch',
    width:110,
    height:50,
    borderRadius:10,
   
  }}>
      <Button  
      title='Chech Out' 
       onPress={() =>
          navigation.navigate('NftCheckOut',{id:listingId})
      
      }
      color={'#7f81f3'}
     
/>
        </View>
        }
        {nfts?.creatorAddress== currentaddress &&
             <View  style={{
                alignSelf:'stretch',
                width:110,
                height:50,
                borderRadius:10,
               
              }}>
                  <Button  
                  title='You own this nft' 
                  disabled={true}
                   onPress={() =>
                      navigation.navigate('NftCheckOut',{id:listingId})
                  
                  }
                  color={'#7f81f3'}
                 
          />
                    </View>
        }
           
                  {/* <View style={{
                     padding:1.2,
                     borderColor:'#2D8EFF',
                     borderWidth: 3,
                     borderRadius: 15,
                  }}>
                     <Web3Button
                     contractAddress={Address}
                     theme="dark"
                      action={() =>
                        contract.directListings.buyFromListing(
                          listingId,
                          1,
                          currentaddress
                        )
                              }
                            //  onSuccess={(result) => alert("Success!")}
                            // onError={(error) => alert("Something went wrong!")}
                               >
                                  Buy Now
                                  
                  </Web3Button>
                </View> */}


        </View>
        </ScrollView>


</LinearGradient>
    
</SafeAreaView>

);
}

export default Buynft