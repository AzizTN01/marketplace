import React,{useState,useEffect} from 'react'
import { View ,
    Image,
    Text,
    TouchableOpacity,
    BackHandler,
    Button,
    SafeAreaView

} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons"
import { useBuyNow, useContract,useUser, Web3Button ,lightTheme,useEnglishAuction,useAddress} from "@thirdweb-dev/react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
// import { ListingType } from "@thirdweb-dev/sdk";

const Address ='0x8D3bc1C6B16c885Aa8F5241340De968F2F54A67f';



const BuynftEnglish = ({ route}) => {

    function shortenString(inputString) {
   
          return inputString?.substring(0, 3) + "..." + inputString?.substring(inputString?.length - 3);
        
      };
    const id = route.params.id
    const { contract } = useContract(Address);
    const { mutateAsync: buyNow} = useBuyNow(contract);
    const currentaddress = useAddress();
    const { data:nfts } = useEnglishAuction(contract,id);

    

    const price =  nfts?.buyoutCurrencyValue.displayValue+ ' ' + nfts?.buyoutCurrencyValue.symbol;
    const name = nfts?.asset.name
    const user = shortenString(nfts?.creatorAddress) ;
    const description =nfts?.asset.description;
    const prop = nfts?.asset.properties;
    const listingId = nfts?.id
    const navigation = useNavigation();
    const owner =nfts?.creatorAddress
    const access = owner == user ? !access : access;
 const { user:users , isLoggedIn, isLoading } = useUser();
    
     
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
                        
                       {price}
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
                    {name}
                </Text>
                <Text style={{
                    fontSize:14,
                    fontWeight:400,
                    color:'#A1A4B3'
                }}>
                    by {user}
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
        
            <View  style={{
              alignSelf:'stretch',
              width:110,
              height:50,
              borderRadius:10,
             
            }}>
                <Button  
                title='Chech Out' 
                 onPress={() =>
                    navigation.navigate('CheckOut',{id:listingId})
                
                }
                color={'#7f81f3'}
               
        />
                  </View>
                  <View  style={{
              alignSelf:'stretch',
              width:110,
              height:50,
              borderRadius:10,
             
            }}>
                <Button  
                title='Place a bid' 
                 onPress={() =>
                    navigation.navigate('CheckOutEnglish',{id:listingId})
                
                }
                color={'#7f81f3'}
               
        />
                  </View>
                  {/* <View style={{
                     padding:1.2,
                     borderColor:'#2D8EFF',
                     borderWidth: 3,
                     borderRadius: 15,
                  }}>
                    { 

                <Web3Button
                     contractAddress={Address}
                     theme="dark"
                      action={() =>
                        contract.englishAuctions.buyoutAuction(listingId)
                              }
                            //  onSuccess={(result) => alert("Success!")}
                            // onError={(error) => alert("Something went wrong!")}
                               >
                                  place a bid
                                  
                  </Web3Button>
                    }
                
                </View> */}


        </View>
      
        </ScrollView>


</LinearGradient>
    
</SafeAreaView>

);
}

export default BuynftEnglish