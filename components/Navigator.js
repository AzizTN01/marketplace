import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import SignUp from './SignUp';
import MyProfile from './MyProfile';
import SuccessPage from './SuccessPage';
import { View ,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'
import Feather from "react-native-vector-icons/Feather"

const Tab =  createBottomTabNavigator();

const CreateNft =({onPress,children})=>{
    <TouchableOpacity style={{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
       // ...styles.shadow
    }}
    onPress={onPress}>
        <View style={{
            width:70,
            height:70,
            borderRadius: 35,
            backgroundColor:'#A49BFE'
        }}>
            {children}
        </View>
    </TouchableOpacity>
}

const Navigator=()=>{
    return(
        <Tab.Navigator
      
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: { 
                position: 'absolute',
                height:70,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor:'#fff'
            },
        }}
         >
            
            <Tab.Screen
             name="home" 
             component={Home}
            options={{
                tabBarIcon:({focused})=> (
                    <View style={{
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                         <Feather style={{
            //  marginLeft:15,
             // marginRight: 4,
             // alignSelf:'center',
            }} name="home" 
            size={22} 
            color={focused? "#7f81f3": "#151B22"} />
            <Text style={{
                fontSize:14,
                fontWeight:400,
                color: focused ? "#7f81f3": "#151B22",
            }}>
                Home
            </Text>
                    </View>
                ),
            }}
            />
            <Tab.Screen
             name="search" 
             component={Search}
             options={{
                tabBarIcon:({focused})=> (
                    <View style={{
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                         <Feather style={{
            //  marginLeft:15,
             // marginRight: 4,
             // alignSelf:'center',
            }} name="search" size={22} 
            color={focused? "#7f81f3": "#151B22"} />

             <Text style={{
                fontSize:14,
                fontWeight:400,
                color: focused ? "#7f81f3": "#151B22",
            }}>
                Search
            </Text>
                    </View>
                ),
            }}/>

{/* <Tab.Screen
             name="SuccessPage" 
             component={SuccessPage}
             options={{
                tabBarIcon:({focused})=>(
                    // <Feather style={{
                    //     //  marginLeft:15,
                    //      // marginRight: 4,
                    //      // alignSelf:'center',
                    //      //  marginLeft:15,
                    //     // marginRight: 4,
                    //     // alignSelf:'center',
                    //     resizeMode: "containt"
                    //     }} name="plus" size={26} 
                    //     color={"#fff"} />
                    <Image source={require('../assets/images/seller.png')}  style={{
                        width:30,
                        height:30,
                        
                    }}resizeMode='contain' />
                ),
                tabBarButton:(props)=>{
                    <CreateNft { ...props}/>
                }
             }}
            />
             */}
             {/* <Tab.Screen name='hey'  component={SuccessPage}
             options={{
                tabBarIcon:({focused})=>(
                    <View>
                        <Feather 
                        //resizeMode='contain'
                     style={{
                         //  marginLeft:15,
                          // marginRight: 4,
                          // alignSelf:'center',
                          //  marginLeft:15,
                         // marginRight: 4,
                         // alignSelf:'center',
                        
                         }} name="plus" size={26} 
                    color={focused? "#7f81f3": "#151B22"} />

                    </View>
                ),
                tabBarButton: (props) => <TouchableOpacity>

                    <CreateNft {...props}/>
                </TouchableOpacity>
                
             }}
             /> */}
            <Tab.Screen
             name="SignUp"
              component={SignUp}
              options={{
                tabBarIcon:({focused})=> (
                    <View style={{
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                         <Feather style={{
            //  marginLeft:15,
             // marginRight: 4,
             // alignSelf:'center',
            }} name="grid" size={22} 
            color={focused? "#7f81f3": "#151B22"} />

             <Text style={{
                fontSize:14,
                fontWeight:400,
                color: focused ? "#7f81f3": "#151B22",
            }}>
                Explore
            </Text>
                    </View>
                ),
            }}
              />
              
            <Tab.Screen 
            name="MyProfile"
             component={MyProfile}
              options={{
                tabBarIcon:({focused})=> (
                    <View style={{
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                         <Feather style={{
            //  marginLeft:15,
             // marginRight: 4,
             // alignSelf:'center',
            }} name="user" size={22} 
            color={focused? "#7f81f3": "#151B22"} />

             <Text style={{
                fontSize:14,
                fontWeight:400,
                color: focused ? "#7f81f3": "#151B22",
            }}>
                Profile
            </Text>
                    </View>
                ),
            }}
             />
            
        </Tab.Navigator>
    );
}
export default Navigator;