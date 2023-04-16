import React,{useState} from 'react'
import { View ,
    SafeAreaView,
    Image,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
   
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FeaturedNft from './FeaturedNft';
import Topseller from './Topseller';
// import {} from "react-native-vector"
import CheckBox from '@react-native-community/checkbox';
import Feather from "react-native-vector-icons/Feather"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ConnectWallet, useUser , useLogin} from "@thirdweb-dev/react-native";




const MyProfile = ({}) => {

    const { user, isLoggedIn, isLoading } = useUser();
  
  return (
<SafeAreaView 
style={{
flex:1,
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
                marginTop:'5%',
                //marginBottom:'5%',
               // margin:'5%',
                flexDirection: 'row',
                alignItems:'center',
            //    position:'absolute',
            }}>
                <TouchableOpacity>
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
                    
                   My Profile

                </Text>
                <ConnectWallet />
               
                <TouchableOpacity style={{
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
                </ TouchableOpacity>
               
            </View>
            <View style={{
                //flex:1,
              //   backgroundColor:'blue',
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
                    height:'80%',
                    width:'100%',
                    borderRadius:20,
                    position:'absolute'
                }}/>
                <View style={{
                    position:'relative',
                    marginTop: '18%',
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
                       Antonio
                    </Text>
                    <Text style={{
                        fontSize:12,
                        fontWeight:600,
                        color:'rgba(57, 59, 62, 0.5)',
                    }}>
                       @antonio
                    </Text>
                   
                </View>
                <TouchableOpacity style={{
                    backgroundColor:'#5F61F0',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:10,
                    width:'30%',
                    height:'30%',
                    alignSelf:'center',
                    marginTop:'10%',
                    marginLeft:'25%'

                  }}>
                    <Text style={{
                        color:'#ffffff'
                    }}>
                        Edit Profile
                    </Text>
                    
                    </TouchableOpacity>
                 
                </View>
               

                </View>
                

            </View>
            <View style={{
                marginTop:'2%',
               // backgroundColor:'red',
                height:'10%',
                width:'90%',
                borderRadius:15,
                flexDirection:'row'

            }} >
                <View style={{
                    flex:1,
                   
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:700,
                        color:'#393B3E'
                    }}>
                        145
                    </Text>
                    <Text style={{
                        fontSize:12,
                        fontWeight:600,
                        color:'rgba(57, 59, 62, 0.5)'
                    }}>
                        Following
                    </Text>

                </View>
                <View style={{
                    flex:1,
                   
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:700,
                        color:'#393B3E'
                    }}>
                        25,6K
                    </Text>
                    <Text style={{
                        fontSize:12,
                        fontWeight:600,
                        color:'rgba(57, 59, 62, 0.5)'
                    }}>
                        Followers
                    </Text>

                </View>
                
                <View style={{
                    flex:1,
                    
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:700,
                        color:'#393B3E'
                    }}>
                        7.8K 
                    </Text>
                    <Text style={{
                        fontSize:12,
                        fontWeight:600,
                        color:'rgba(57, 59, 62, 0.5)'
                    }}>
                        Likes
                    </Text>

                </View>
                


            </View>
           <View style={{ 
            marginTop:'5%',
               // backgroundColor:'red',
                height:'6%',
                width:'90%',
                borderRadius:15,
                flexDirection:'row'
                }}>
                     <LinearGradient
                     colors={['#4C4EC0','#9fa0f6']} 
                     start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}}
                    style={{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor:'#4C4EC0',
                        borderRadius:12
                    }}>
                        <TouchableOpacity>
                        <Text style={{
                            color:'#fff',
                            fontSize:16,
                            fontWeight:600,
                        }}>
                           Artworks (50)
                        </Text>
                        </TouchableOpacity>
                        
                    </LinearGradient>
                    <TouchableOpacity style={{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        
                        <Text style={{
                             color:'rgba(57, 59, 62, 0.5)',
                             fontSize:16,
                             fontWeight:600,
                        }}>
                        Liked
                        </Text>
                     
                    </ TouchableOpacity>

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
                            marginTop:'5%'
                        }}
                        >
          
           <View style={{
            width:'100%',
            flexDirection:'row',
            //backgroundColor:'red',
            justifyContent:'space-evenly',
               alignItems:'center'
           }}>
           <Image source={source=require('../assets/ProfileImages/image1.png')} 
                style={{   
                    borderRadius:15,
                   marginTop:'5%',
                }}/>
               
                 <Image source={source=require('../assets/ProfileImages/image2.png')} 
                style={{   
                    borderRadius:15,
                    marginTop:'5%',
                }}/>
                
           </View>
           <View style={{
            width:'100%',
            flexDirection:'row',
            //backgroundColor:'red',
            justifyContent:'space-evenly',
               alignItems:'center'
           }}>
           <Image source={source=require('../assets/ProfileImages/image3.png')} 
                style={{   
                    borderRadius:15,
                   marginTop:'5%',
                }}/>
               
                 <Image source={source=require('../assets/ProfileImages/image4.png')} 
                style={{   
                    borderRadius:15,
                    marginTop:'5%',
                }}/>
                
           </View>
            <View style={{
            width:'100%',
            flexDirection:'row',
            //backgroundColor:'red',
            justifyContent:'space-evenly',
               alignItems:'center'
           }}>
           <Image source={source=require('../assets/ProfileImages/image5.png')} 
                style={{   
                    borderRadius:15,
                   marginTop:'5%',
                }}/>
               
                 <Image source={source=require('../assets/ProfileImages/image6.png')} 
                style={{   
                    borderRadius:15,
                    marginTop:'5%',
                }}/>
                
           </View>
            </ScrollView>
          
           
                

            
           </View>
          

        </View>

    </LinearGradient>
</SafeAreaView>
);
}

export default MyProfile