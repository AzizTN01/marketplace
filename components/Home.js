import React,{useState} from 'react'
import { View ,
    SafeAreaView,
    Image,
    Text,
    FlatList,
    ScrollView,
   
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FeaturedNft from './FeaturedNft';
import Topseller from './Topseller';
// import {} from "react-native-vector"
import CheckBox from '@react-native-community/checkbox';
import Feather from "react-native-vector-icons/Feather"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Home = ({}) => {

 const data = [
    { id: '1', title: 'Design Mania', artist: 'Antonio', bid: '0.09 ETH', time: '22 minutes ago' , nft: '../assets/images/nftest.png'},
    { id: '2', title: 'Abstract Art', artist: 'Sarah', bid: '0.01 ETH', time: '2 hours ago', nft: '../assets/images/nftest2.png' },
    { id: '3', title: 'NFT Title 3', artist: 'Artist 3', bid: '0.05 ETH', time: '1 day ago' , nft: '../assets/images/nftest.png'},
    // add more data here
  ];


  const renderItem = ({ item }) => <FeaturedNft
   title={item.title} 
   artist={item.artist} 
   highestBid={item.bid} 
   timeAgo={item.time}
   nft={item.nft} />;

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

            <View style={{
                width:'100%',
                height:'50%',
                marginTop:'5%',
               //backgroundColor:'red',
                }}>

                    <View style={{
                       // backgroundColor:"yellow",
                        width:'100%',
                        height:'20%',
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
                        Featured NFTs
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
                            flexDirection:'row'
                        }}>
                          
                        <ScrollView 
                         horizontal={true}
                         showsHorizontalScrollIndicator={true}
                         scrollEnabled={true}
                         pagingEnabled={true}
                        style={{flex:1,height:'100%',}}
                        >
                     <FlatList
                     style={{flex:1,height:'100%',}}
                          data={data}
                       keyExtractor={(item) => item.id}
                       renderItem={renderItem}
                       horizontal={true}
                         showsHorizontalScrollIndicator={false}
                     />
                        
                        </ScrollView>
                        
                      
                        </View>
                        
                    </View>

            </View>
            <View style={{
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
                        Featured NFTs
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
                 <ScrollView 
                         Vertical={true}
                         showsVerticalScrollIndicator={true}
                         scrollEnabled={true}
                         //pagingEnabled={true}
                        style={{flex:1,height:'100%',}}
                        >
                      <Topseller/>
             
                        </ScrollView>
              <Topseller/>
              <Topseller/>
              <Topseller/>
             </View>

            </View>
            
 
        </View>
       
     </LinearGradient>
   </View>

   </SafeAreaView>
);
}

export default Home