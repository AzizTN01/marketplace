import React,{useEffect, useState} from 'react'
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
import axios from 'axios';


const Search = ({}) => {

 
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
                   <Text style={{
                    color:'black',
                    fontSize: 28,
                    fontWeight:600

                   }} >
                    Top NFT's
                   </Text>
                </View>
                {/* filter */}
               

            </View>

             {/*SEARCH RESULT AND THE REST OF THE PAGE*/}

           
             
        </View>
     </LinearGradient>
   </View>

   </SafeAreaView>
);
}

export default Search