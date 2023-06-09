import React,{useEffect, useState} from 'react'

import { View ,
    SafeAreaView,
    Image,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Alert,
   
} from 'react-native'
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


import { 
    useContract,
    useDirectListings,
    useContractMetadata,
    useEnglishAuctions,
    useAddress,

} from "@thirdweb-dev/react-native";

import LinearGradient from 'react-native-linear-gradient';
import FeaturedNft from './FeaturedNft';
import Topseller from './Topseller';

import BuynftEnglish from './BuyNftEnglish';
// import {} from "react-native-vector"
import CheckBox from '@react-native-community/checkbox';
import Feather from "react-native-vector-icons/Feather"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Address ='0x8D3bc1C6B16c885Aa8F5241340De968F2F54A67f';

const options = {
  method: 'GET',
  url: 'https://top-nft-sales.p.rapidapi.com/sales/30d',
  headers: {
    'X-RapidAPI-Key': 'c6c4deb503msh7e8b65d5e7e4dffp12e772jsn923331934efc',
    'X-RapidAPI-Host': 'top-nft-sales.p.rapidapi.com'
  }
};

const Home = ({}) => {
    const tokenid=0;
    const { contract } = useContract(Address);
    const { data:Metadata } = useContractMetadata(contract);
    const { data:englishAuctions , isLoading:isLoading} = useEnglishAuctions(contract);
    const { data:nft ,isLoading : loader} = useDirectListings(contract);
    const address = useAddress();

    const secToMin = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

     
      
        const result = [];
        if (hours > 0) {
          result.push(hours + "h");
        }
        if (minutes > 0) {
          result.push(minutes + "m");
        }
        if (remainingSeconds > 0) {
          result.push(remainingSeconds + "s");
        }
      
        return result.join("");
      };
      
      
      const navigation = useNavigation();

      const goToOtherScreen = () => {
        navigation.navigate('Buynft');
      };
      const [nftData, setNFTData] = useState([]);

      // useEffect(() => {
      //   const fetchData = async () => {
      //     const options = {
      //       method: 'GET',
      //       url: 'https://top-nft-sales.p.rapidapi.com/sales/30d',
      //       headers: {
      //         'X-RapidAPI-Key': 'c6c4deb503msh7e8b65d5e7e4dffp12e772jsn923331934efc',
      //         'X-RapidAPI-Host': 'top-nft-sales.p.rapidapi.com',
      //       },
      //     };
    
      //     try {
      //       const response = await axios.request(options);
      //       setNFTData(response.data);
           
      //     } catch (error) {
      //       console.error(error);
      //     }
      //   };
    
      //   fetchData();
      // }, []);
    




  return (
<SafeAreaView 
   style={{ flex:1,marginBottom:'15%' }}>
  
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
             // backgroundColor:'red',
              marginTop:'5%',
              marginBottom:'0%',
              margin:'5%',
              
            
        }}>
          {/* this part is for the top of the screen */}
            <View style={{
               // backgroundColor:'yellow',
                width:'100%',
                height:'7%',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <Text style={{
                    fontSize:24,
                    fontWeight:700,
                    color:'#131330',
                }}>
                    Marketplace
                </Text>
           
                <View style={{
                    height:40,
                    width:40,
                    borderRadius:20,
                    backgroundColor:'white',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Feather style={{
            //  marginLeft:15,
             // marginRight: 4,
              alignSelf:'center',
            }} name="bell" size={22} color={"rgba(57, 59, 62, 1)"} />
                </View>
            </View>
            {/* this part is for featured NFT's */}
<ScrollView>

{/* {nftData.map((nft, index) => (
        <View style={{
          flex:1,
          backgroundColor:'red',
        }} key={index}>
          <Text >{nft.nft_name}</Text>
        </View>
      ))} */}

            <View style={{
                width:'100%',
                height:'50%',
                marginTop:'5%',
               //backgroundColor:'red',
                }}>

                    <View style={{
                       // backgroundColor:"yellow",
                        width:'100%',
                        height:'100%',
                    }}>
                        <View style={{
                             flexDirection:'row',
                              justifyContent:'space-between',
                               alignItems:'center'
                        }}>
                             <Text style={{
                            color:"#454459",
                            fontSize:18,
                            fontWeight:'700',
                        }}>
                        Direct Listings
                        </Text>
                        <TouchableOpacity onPress={()=> {
                          navigation.navigate("SeeAll",{
                            nft:nft,
                            navroute: "Buynft"
                          })
                        }}>
                        <Text style={{
                            color:"#5F61F0",
                            fontSize:18,
                            fontWeight:'600',
                        }}>
                        See all
                        </Text>
                        </TouchableOpacity>
                        </View>
                        
                        <View style={{
                          flex:1,
                            flexDirection:'row',
                           // backgroundColor:'red',
                            

                        }}>
                          
                        {/* <ScrollView 
                         horizontal={true}
                         showsHorizontalScrollIndicator={true}
                        // scrollEnabled={true}
                        // pagingEnabled={true}
                        style={{
                            flex:1,
                            height:'100%',
                            //backgroundColor:'red'
                        }}
                        > */}
                        {loader &&
//  <Text style={{
//   fontSize:25,
//   color:"black"
//  }}>
//   isLoading
//  </Text>
<ContentLoader 
speed={2}
width={350}
height={200}
viewBox="0 0 350 200"
backgroundColor="#f3f3f3"
foregroundColor="#d6d6d6"

>
<Circle cx="31" cy="31" r="15" /> 
<Rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
<Rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
<Rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
</ContentLoader>
     }
     {/* <Text style={{color:'black'}}>{JSON.stringify(nft)}</Text> */}
                        {!loader &&
                          <FlatList
                     style={{ flex: 1, marginVertical:'5%'}}
                     keyExtractor={(_,index)=> `direct_listings_${index.toString()}`}
                     data={nft}
                     horizontal={true}
                    showsHorizontalScrollIndicator={false}
                       renderItem={({item})=> {
                        // nft.map((nft)=>{
                          // console.warn("item",item)
                            return(
                            
                              <View>
                                  {/* <TouchableOpacity onPress={() =>
                                  navigation.navigate('Buynft',{
                                    item: item
                                  })
                                  }
                                  > */}
                                 <FeaturedNft
                                 navroute={"Buynft"}
                                 item={item}
                                 id={nft?.id}
                                 title={item?.asset.name} 
                                 artist={item?.asset.name} 
                                 highestBid={item?.currencyValuePerToken.displayValue} 
                                 currency={item?.currencyValuePerToken.name}
                                 nft={item?.asset.image}
                                 owner={item?.creatorAddress}
                                 stat={item?.quantity} />
                                </View> 
                                
                            )
                       }}
                        //  )})
                      //  )}
                       
                     />
                        }
                     
                        
                         {/* <View style={{flexDirection:'row'}}>

                      
                           {nft && nft.map((nft)=>{
                            return(
                                 <View>
                                  <TouchableOpacity onPress={() =>
                                     navigation.navigate('Buynft',{id:nft?.id})
                                     }>
                                    <FeaturedNft
                                    title={nft?.asset.name} 
                                    artist={nft?.asset.name} 
                                    highestBid={nft?.currencyValuePerToken.displayValue} 
                                    currency={nft?.currencyValuePerToken.name}
                                    nft={nft?.asset.image}
                                    listingId={nft?.id}
                                    stat={nft?.quantity} />
                                    </TouchableOpacity>
                                </View> )})}

                               </View > */}
                        {/* </ScrollView> */}
                        </View>
                    </View>
            </View>
            <View style={{
                width:'100%',
                height:'50%',
                //marginTop:'5%',
               
              //backgroundColor:'red',
                }}>

                    <View style={{
                       // backgroundColor:"yellow",
                        width:'100%',
                        height:'100%',
                    }}>
                        <View style={{
                             flexDirection:'row',
                              justifyContent:'space-between',
                               alignItems:'center'
                        }}>
                             <Text style={{
                            color:"#454459",
                            fontSize:18,
                            fontWeight:'700',
                        }}>
                        english Auctions
                        </Text>
                        <TouchableOpacity onPress={()=> {
                          navigation.navigate("SeeAll",{
                            nft: englishAuctions,
                            navroute: "Buynftenglish"
                          })
                        }}>
                        <Text style={{
                            color:"#5F61F0",
                            fontSize:18,
                            fontWeight:'600',
                        }}>
                        See all
                        </Text>
                        </TouchableOpacity>
                        </View>
                        
                        <View style={{
                            flexDirection:'row',
                          // backgroundColor:'green',
                            marginBottom:'15%'
                        }}>
                          
                      
                        {isLoading &&
                          <ContentLoader 
                          speed={2}
                          width={350}
                          height={200}
                          viewBox="0 0 350 200"
                          backgroundColor="#f3f3f3"
                          foregroundColor="#d6d6d6"
                          
                        >
                          <Circle cx="31" cy="31" r="15" /> 
                          <Rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
                          <Rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
                          <Rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
                        </ContentLoader>

                        }
                        {!isLoading &&
                          <FlatList
                     style={{flex:1,height:'100%',}}
                     keyExtractor={(_,index)=> `en_auction_${index.toString()}`}
                     data={englishAuctions}
                     horizontal={true}
                     showsHorizontalScrollIndicator={false}
                       renderItem={({item})=>(
                               <View>

                                {/* <TouchableOpacity onPress={() =>
                                   navigation.navigate('Buynftenglish',{item: item})
                                   }> */}
                                  <FeaturedNft
                                   navroute={"Buynftenglish"}
                                  title={item?.asset.name} 
                                  artist={item?.asset.name} 
                                  highestBid={item?.buyoutCurrencyValue.displayValue} 
                                  currency={item?.buyoutCurrencyValue.symbol}
                                  nft={item?.asset.image}
                                  listingId={item?.id}
                                  stat={item.quantity}
                                  item={item}
                                  />
                                  {/* </TouchableOpacity> */}
                              </View> 
                       )}
                       
                     />
                     }
                        
                  
                        </View>
                    </View>
            </View>
           
            {/* <View style={{
             // backgroundColor:'red',
              flex:1,
            }}>
            <View style={{
                             flexDirection:'row',
                              justifyContent:'space-between',
                               alignItems:'center'
                        }}>
                             <Text style={{
                            color:"#454459",
                            fontSize:18,
                            fontWeight:'700',
                        }}>
                        English Auctions
                        </Text>
                        <Text style={{
                            color:"#5F61F0",
                            fontSize:18,
                            fontWeight:'600',
                        }}>
                        See all
                        </Text>
             </View>
             <View style={{
             // backgroundColor:'yellow',
              flex:1

             }}>
              <FlatList
                     style={{flex:1,height:'100%',}}
                     keyExtractor={(nft)=>nft?.id}
                     data={englishAuctions}
                 
                       renderItem={({})=>(
                        englishAuctions && englishAuctions.map((englishAuctions)=>{
                          return(
                               <View>
                                <TouchableOpacity onPress={() =>
                                   navigation.navigate('Buynft',{id:englishAuctions?.id})
                                   }>
                                  <FeaturedNft
                                  title={englishAuctions?.asset.name} 
                                  artist={englishAuctions?.creatorAddress} 
                                  highestBid={englishAuctions?.buyoutCurrencyValue.displayValue} 
                                  currency={englishAuctions?.buyoutCurrencyValue.symbol}
                                  nft={englishAuctions?.asset.image}
                                  listingId={englishAuctions?.id}
                                  stat={englishAuctions.status} />
                                  </TouchableOpacity>
                              </View> )})
                       )}
                       
                     />
             
             </View>

            </View> */}
     
            </ScrollView>
        </View>
       
     </LinearGradient>
   </View>

   </SafeAreaView>
);
}

export default Home