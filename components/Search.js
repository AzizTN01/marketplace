import React,{useState} from 'react'
import { View ,
    SafeAreaView,
    Image,
    Text,
    FlatList,
    ScrollView,
   
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import User from './User';
import Topseller from './Topseller';
// import {} from "react-native-vector" 
import CheckBox from '@react-native-community/checkbox';
import Feather from "react-native-vector-icons/Feather"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Search = ({}) => {

 

  return (
<SafeAreaView 
   style={{ flex:1 }}>
  
   <View 
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
            //backgroundColor:'grey',
            marginTop:'10%',
            margin:'5%',
           // alignContent:'center',
            //alignItems:'center'
        }}>
                {/*search and filter*/}
            <View style={{
               // backgroundColor:'red',
                height:'7%',
                width:'100%',
                flexDirection:'row',
            }}>
                <View style={{
                     // backgroundColor:'grey',
                      height:'100%',
                      width:'80%',
                      marginRight: '2%',
                }}>
                      {/*search bar*/}
                    <View style={{
                        flex:1,
                       // backgroundColor:'red',
                        borderRadius:12,
                        borderColor:'#9E9E9E',
                        borderWidth:1,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20,
                        paddingRight: 20,
                        
                    }}>
                        <Text style={{
                            fontSize:18,
                            fontWeight:400,
                            color:'#9E9E9E'
                           // margin:'5%'
                        }}>
                            search here
                        </Text>
                        <Feather style={{
            //  marginLeft:15,
             // marginRight: 4,
              alignSelf:'center',
            }} name="search" size={23} color={"rgba(158, 158, 158, 1)"} />
                    </View>
                </View>
                {/* filter */}
                <View style={{
                 // backgroundColor:'green',
                  height:'100%',
                  width:'20%',
                  //borderRadius:12,
                  marginLeft:20,
                }}>
                    <View style={{
                        width:'65%',
                        height:'100%',
                        backgroundColor:'white',
                        borderRadius:12,
                        alignItems:'center',
                        justifyContent:'center'
                        
                    }}>
                         <Feather style={{
            //  marginLeft:15,
             // marginRight: 4,
              alignSelf:'center',
            }} name="sliders" size={28} color={"rgba(158, 158, 158, 1)"} />

                    </View>
                </View>

            </View>

             {/*SEARCH RESULT AND THE REST OF THE PAGE*/}

             <View style={{
                flex:1,
                marginTop:'10%'
               // backgroundColor:'red',

             }}>
                <Text style={{
                    fontSize:18,
                    color:'#131330',
                    fontWeight:700,

                }}>
                    search Result
                </Text>
                 {/*type of resulte*/}
                <View style={{
                    width:'100%',
                    height:'8%',
                    marginTop:'10%',
                    flexDirection:'row',
                    borderRadius:12,
                    backgroundColor:'#E0E0E0'


                }}>
                    <View style={{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                        
                        
                        
                    }}>
                        <Text style={{
                             fontSize:14,
                             fontWeight:700,
                        }}>
                            Items
                        </Text>
                    </View>
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
                        <Text style={{
                            color:'#fff',
                            fontSize:14,
                            fontWeight:700,
                        }}>
                            Users
                        </Text>
                    </LinearGradient>
                   
                    <View  style={{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                       
                    }}>
                        <Text style={{
                             fontSize:14,
                             fontWeight:700,
                        }}>
                            Collections
                        </Text>
                    </View>
                   
                </View>
                <User/>
                <User/>
                <User/>
                <User/>
             </View>
             
        </View>
     </LinearGradient>
   </View>

   </SafeAreaView>
);
}

export default Search