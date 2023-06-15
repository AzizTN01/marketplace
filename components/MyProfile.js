import React,{useState} from 'react'
import { View ,
    SafeAreaView,
    Image,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Modal,
    Pressable,TextInput
   
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FeaturedNft from './FeaturedNft';
import Topseller from './Topseller';
// import {} from "react-native-vector"
import CheckBox from '@react-native-community/checkbox';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import Feather from "react-native-vector-icons/Feather"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    useAddress, 
    useContract,
    useDirectListings,
    useContractMetadata,
    useDirectListing,
    useOwnedNFTs,
    ConnectWallet,
    useNFT,
    Web3Button,
    useCreateDirectListing
} from "@thirdweb-dev/react-native";
import ProfileAuction from './Profile_Auction';
import ProfileDirectListings from './Profile_DirectListings';


const Address ='0x8D3bc1C6B16c885Aa8F5241340De968F2F54A67f';
const collection= "0x245d1343EC0dE0dBE5730dD38D2fB6dfdecbfdaF";
const Loading = ({}) => {
  return(
    <View>
    <Text style={{
      fontSize: 24,
      fontWeight:'600',
      color:'#131330',
      marginLeft:'5%',
 }}>
loading
    </Text>
    </View>
  )
}

const MyProfile = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setselectedItem] = useState(null)
  
  // const [direct, setDirect] = useState(true);
  // const [bid, setBid] = useState(false);

  const [togglePage, settogglePage] = useState('direct')

  // const handlePressDirect = ( bid, direct ) => {
  //   direct ? setBid(false) : setDirect(true)
  // };
  

  const [nftid , setNftid] = useState('')
  const [price, setPrice] = useState();
  const [quantity, setQuantity]= useState(1);

    const connectedWallet =useAddress();
   const tokenid=0;
    const { contract } = useContract(collection);
    const { data:Metadata } = useContractMetadata(contract);
  // const { data:nft, isLoading, } = useDirectListings(contract);
    const { data:nfts,  } = useDirectListing(contract);
    const { data:nft } = useDirectListings(contract);
   const image = nfts?.asset.image
   const { data:owned, isLoading:loading, error:err } = useOwnedNFTs(contract, connectedWallet);
   const { data: item , isLoading : loadings, error } = useNFT(contract, nftid);
    console.error(owned)
   function shortenString(inputString) {
    if (inputString.length <= 6) {
      return inputString;
    }else if (inputString.length==null){
      return 'not connected'
    }
     else {
      return inputString.substring(0, 3) + "..." + inputString.substring(inputString.length - 3);
    }
  }
  const {
    mutateAsync: createDirectListing,
    isLoading,
    er,
  } = useCreateDirectListing(contract);
  return (
<SafeAreaView 
style={{
flex:1,
marginBottom:'15%'

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
          //  position:'relative',
           flexDirection:'column',
         alignItems:'center',
            //justifyContent:'',


        }}>
            <View style={{
               // flex:1,
                 height: '8%',
                 width:'100%',
               // backgroundColor:'green',
                marginTop:'4%',
                //marginBottom:'5%',
               // margin:'5%',
                flexDirection: 'row',
                alignItems:'center',
            //    position:'absolute',
            }}>
                <TouchableOpacity onPress={image}>
                <Feather style={{
             marginLeft:25,
             // marginRight: 4,
              alignSelf:'center',
            }} name="arrow-left" size={30} color={"rgba(57, 59, 62, 1)"} />
                </TouchableOpacity>
               
                <Text style={{
                    fontSize: 24,
                    fontWeight:'600',
                    color:'#131330',
                    marginLeft:'5%',

                }}>
                     {/* {nft && nft.map((nft)=>{
            return(  
                      nft?.asset.image       )
           }

           )}   */}
                  My Profile

                </Text>
          
                <ConnectWallet />
                {/* <TouchableOpacity style={{
                    height:50,
                    width:50,
                    borderRadius:25,
                   // backgroundColor:'red',
                    marginLeft:'35%',
                    position:'relative',
                    //alignSelf:'flex-end'
                    borderWidth:2,
                    borderColor:'rgba(57, 59, 62, 0.1)',
                    justifyContent:'center'
                }}>
                     <Feather style={{
//marginLeft:25,
             // marginRight: 4,
              alignSelf:'center',
            }} name="settings" size={26} color={"rgba(57, 59, 62, 1)"} />
                </ TouchableOpacity> */}
               
            </View>
            <View style={{
                //flex:1,
              //  backgroundColor:'blue',
                height:'20%',
                width:'90%',
                marginTop:'5%',
                marginBottom:'5%',
                margin:'5%',
            }}>
                 
                <View style={{
                    height:'100%',
                    width:'100%',
                    borderRadius:20,
                 //backgroundColor:'red'
                }}>
                   
                    
                <Image source={source=require('../assets/images/profilebackgroud.png')} 
                style={{
                    height:'85%',
                    width:'100%',
                    borderRadius:20,
                    position:'absolute'
                }}/>
                <View style={{
                    position:'relative',
                    marginTop: '16%',
                    marginLeft:'5%',
                   // backgroundColor:'red',
                   flexDirection:'row',
                 alignItems:'center',


            }}>
                 
                <Image source={source=require('../assets/images/sellerprofile.png')} 
                style={{
                    height:90,
                    width:80,
                    borderRadius:15,
                    marginTop:'5%',
                    borderWidth: 7,
                    borderRadius: 15,
                    borderColor:'#fff',
                }}/>
                <View style={{
                    marginTop: '10%',
                    marginLeft:'3%'
                }} >
                    <Text style={{
                        fontSize:20,
                        fontWeight:600,
                        color:'#393B3E',
                    }}>
                     {shortenString(connectedWallet)}
                    </Text>
                    <Text style={{
                        fontSize:12,
                        fontWeight:600,
                        color:'rgba(57, 59, 62, 0.5)',
                    }}>
                       @antonio
                    </Text>
                   
                </View>
              
                {/* <TouchableOpacity style={{
                    backgroundColor:'#5F61F0',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:10,
                    width:'30%',
                    height:'30%',
                    alignSelf:'center',
                    marginTop:'10%',
                    marginLeft:'20%'

                  }}>
                    
                    
                    </TouchableOpacity> */}
                 
                </View>
               

                </View>
                

            </View>
            
          
           <View style={{
            flex:1,
           // backgroundColor:'red',
            width:'90%',
            height:'100%',
           // flexDirection:'row',
         //   justifyContent:'center',
           //    alignItems:'center'
           }}>
            <ScrollView 
                         Vertical={true}
                         showsHorizontalScrollIndicator={true}
                         scrollEnabled={true}
                       //  pagingEnabled={true}
                        style={{
                            flex:1,
                            height:'100%',
                            marginTop:'5%',
                          //  backgroundColor:'yellow',
                            flexDirection:'column',
                            alignContent:'flex-start',
                        }}
                        >

<View  style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                   //   backgroundColor:'red',
                       //justifyContent:'space-evenly',
                      // alignItems:'center'
                   }}>
                    {loading &&
                    < >
                    <View style={{
                        marginLeft:20,
                        marginRight:20,
                    }}>
                     <ContentLoader 
                   speed={2}
                   width={160}
                   height={160}
                   viewBox="0 0 160 160"
                   backgroundColor="#f3f3f3"
                   foregroundColor="#d6d6d6"
                 
                 >
                   <Rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
                 </ContentLoader>
                 </View>
                 <View>
                     <ContentLoader 
                   speed={2}
                   width={160}
                   height={160}
                   viewBox="0 0 160 160"
                   backgroundColor="#f3f3f3"
                   foregroundColor="#d6d6d6"
                 
                 >
                   <Rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
                 </ContentLoader>
                 </View>
                    </>
                    }
             {owned && owned.map((owned)=>{
              
            return(
              <TouchableOpacity
              onPress={() => {
                setselectedItem(owned)
                setModalVisible(true),setNftid(owned?.metadata.id)}
              }
                >
               <View style={{
             // backgroundColor:'red',
              marginLeft:'5%',
              marginBottom:'5%',
              borderRadius:15,
              height:190,
              width:160,
             // alignItems:'center'
              
               }}>
                    <Image
                    source={{uri: owned?.metadata.image}}
                     style={{   
                    borderRadius:15,
                    //marginLeft:'5%',
                   alignSelf:'center',
                    height:150,
                    width:150,
                 }} />
                 <Text style={{
                  fontSize:14,
                  fontWeight:600,
                  color:'black',
                  paddingLeft:'5%',
                 }}>
                  Name:{owned?.metadata.name}
                 </Text>
                 <Text style={{
                  fontSize:14,
                  fontWeight:600,
                  color:'black',
                  paddingLeft:'5%',
                 }}>
                  
                 </Text>
                </View>
                </TouchableOpacity>
                
            )
           }
           )}
           </View>
           <View style={{}}>
           <Modal
           animationType="slide"
           transparent={true}
           visible={modalVisible}
           onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible); }}
           >
            <LinearGradient
             colors={['#D7D3FF', 'white', 'white' ,'#D7D3FF']}
             start={{ x: 0, y: 1 }}
             end={{ x: 1, y: 0 }}
             locations={[0, 0.35, 0.65, 1]}
               style={{  flex:1,
                width:'100%',
                //backgroundColor:'red',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf:'center'
  }}
            >
              {!loadings &&
        <View
          style={{
            width:'100%',
            height:'100%',
            paddingVertical:'10%'
            //backgroundColor:'red',
          }}
          >     
          <View style={{
            //backgroundColor:'red',
            flexDirection:'row'
          }}>
          <Pressable
           onPress={() => setModalVisible(!modalVisible)}
           style={{alignSelf:'flex-start'}}
          >
            <Feather style={{
              marginLeft:15,
              marginRight: 4,
              alignSelf:'center',
            }} name="arrow-left" size={28} color={"rgba(2, 2, 2, 0.99)"} />
          </Pressable>
          <Text
           style={{fontSize:18,
                  fontWeight:600,
                  color:'black',
                  paddingLeft:'5%',
                 // paddingBottom: '5%',
                  }}>Enter Price

          </Text>
          </View>
          <View style={{
            height: 38,
            width: "80%",
            backgroundColor:'#9e9e9e9e',
            alignSelf:'center',
            flexDirection:'row',
           borderRadius:12,
           
          }}>
            <TouchableOpacity 
            onPress={()=>{
              settogglePage('direct')
            }}
            style={{
             flex:1,
             backgroundColor:togglePage === 'direct'? '#A49BFE': 'transparent',
             borderRadius:12,
             alignContent:'center',
             alignItems:'center',
             justifyContent:'center'

            }}>
            <View style={{

            }} > 
            <Text
           style={{fontSize:13,
                  fontWeight:600,
                  color: 'white',
                  paddingLeft:'5%',
                 // paddingBottom: '5%',
                  }}> direct listing</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
                        onPress={()=>{
                          settogglePage('bid')
                        }}
            style={{             flex:1,
              // backgroundColor:'blue',
              backgroundColor:togglePage === 'bid'? '#A49BFE': 'transparent',
             borderRadius:12,
            alignContent:'center',
            alignItems:'center',
            justifyContent:'center'}}
            // onPress={
            //   handlePressAuction()
            // }
            >
            <View style={{

            }} >
              <Text
              style={{fontSize:13,
                  fontWeight:600,
                  color: 'white',
                  paddingLeft:'5%',
                 // paddingBottom: '5%',
                  }}> auction </Text>

            </View>
            </TouchableOpacity>
            </View>
          {/* </View> */}
          {togglePage === 'direct' ?
                    <ProfileDirectListings selectedItem={selectedItem} />

          : togglePage === 'bid' && 
          <ProfileAuction selectedItem={selectedItem} />


          }


          </View>}
          {loadings &&
          <Loading />

          }
            </LinearGradient>
           </Modal>
           </View>
           {/* {!owned &&
            <View style={{
                backgroundColor:'black'
            }}> 
                <Text>no nft </Text>
                </View>

           } */}
          
            </ScrollView>
          
           
                

            
           </View>
          

        </View>

    </LinearGradient>
</SafeAreaView>
);
}

export default MyProfile