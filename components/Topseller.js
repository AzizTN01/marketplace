//import React,{useState} from 'react'
import { View ,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"



const Topseller = ({}) => {


  return (
<View style={{
    width:'100%',
    height:'30%',
    backgroundColor:'white',
    borderRadius:10,
    marginTop:'3%',
    flexDirection:'row',
    alignItems:'center'

}}>
    
            <View style={{
                flex:1,  
                marginLeft:20,
                //padding:'2%',
                flexDirection:'row',
                //backgroundColor:'red',
                justifyContent:'space-around',
                alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:700,
                        color:'#131330',
                        marginRight: 20,
                    }}>
                        1
                    </Text>

                    <Image
                         source={require('../assets/images/seller.png')}
                         style={{
                           // alignSelf:'center',
                            borderRadius:30,
                            width:50,
                            height:50,
                         }} 
                     />
                     <View style={{
                        //backgroundColor:'red',
                        
                     }}> 
                     <Text style={{
                        fontSize:18,
                        fontWeight:700,
                        color:'#131330',
                     }}>
                     Antonio
                     </Text>
                     <Text style={{
                        fontSize:14,
                        fontWeight:'400',
                        color:'#131330',
                     }}>
                     $765,50
                     </Text>

                     </View>
            </View>            
            <View  style={{
                flex:1,
                }}
                >
                     <TouchableOpacity style={{
                    backgroundColor:'#5F61F0',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:10,
                    width:'50%',
                    height:'45%',
                    alignSelf:'flex-end'

                  }}>
                    <Text style={{
                        color:'#ffffff'
                    }}>
                        follow
                    </Text>
                    </TouchableOpacity>
            </View>
    
</View>
);
}

export default Topseller