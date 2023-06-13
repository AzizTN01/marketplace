import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Search from './Search';
import Mintnft from './MintNft';
import SingIn from './SingIn';
import MyProfile from './MyProfile';
import Buynft from './BuyNft';
import BuynftEnglish from './BuyNftEnglish';
import NftCheckOut from './NftCheckOut';
import CheckOut from './CheckOut';
import CheckOutEnglish from './CheckOutEnglish';
import Error from './error';
import { View ,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'


import Feather from "react-native-vector-icons/Feather"
const Stack = createStackNavigator();
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


const Homestack = ({}) => {


    return (
  
  <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen   name="Home" component={Home} />
    <Stack.Screen headerShown={false} name="Buynft" component={Buynft} />
    <Stack.Screen headerShown={false} name="SingIn" component={SingIn} />
    <Stack.Screen headerShown={false} name="Buynftenglish" component={BuynftEnglish} />
    <Stack.Screen headerShown={false} name="CheckOut" component={CheckOut} />
    <Stack.Screen headerShown={false} name="NftCheckOut" component={NftCheckOut} />
    <Stack.Screen headerShown={false} name="CheckOutEnglish" component={CheckOutEnglish} />
    <Stack.Screen headerShown={false} name="Error" component={Error} />
  </Stack.Navigator>
  );
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
             component={Homestack}
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
              component={Mintnft}
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
            }} name="plus-circle" size={22} 
            color={focused? "#7f81f3": "#151B22"} />

             <Text style={{
                fontSize:14,
                fontWeight:400,
                color: focused ? "#7f81f3": "#151B22",
            }}>
                Mint 
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
                My collection
            </Text>
                    </View>
                ),
            }}
             />
            
        </Tab.Navigator>
    );
}
export default Navigator;