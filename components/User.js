import React,{useState} from 'react'
import { View ,
    Image,
    Text,

} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import LinearGradient from 'react-native-linear-gradient';



const User = ({}) => {


  return (
<View style={{
  //backgroundColor:'yellow',
  height:'13%',
  width:'100%',
  marginTop:'5%',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  borderBottomWidth:0.5 ,
  borderBottomColor: '#8B939E',
  //marginBottom:10,
  paddingBottom:10 ,
  paddingTop:10,
}}>
     {/* image */}
    <View style={{
        flex:1,
       // backgroundColor:'green',
       flexDirection:'row',
       alignContent:'space-around'

    }}>
        <Image source={require('../assets/images/seller.png')} style={{
            borderRadius: 25,
           
        }} />
         {/* name and followers */}
    <View style={{
       // backgroundColor:'red',
        flexDirection:'column',
        marginLeft:10
    }}>
       <Text style={{
        fontSize:18,
        fontWeight: '700',
        color:'#131330'
       }}>
        antonio
       </Text>
       <Text style={{ 
         fontSize:12,
        fontWeight: '400',
        color:'#9E9E9E'}}>
2.5k followers
       </Text>
    </View>

    </View>
    
     {/* follow botton */}
    <View style={{
            flex:1,
           // backgroundColor:'yellow',
            justifyContent:'center',
          alignItems:'flex-end'
        }}>
         <LinearGradient
                     colors={['#4C4EC0','#9fa0f6']} 
                     start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}}
                    style={{
                        height:'80%',
                        width:'60%',
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
                            follow
                        </Text>
                    </LinearGradient>
        </View>
 
</View>
);
}

export default User