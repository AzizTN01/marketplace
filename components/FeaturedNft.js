import React,{useState} from 'react'
import { View ,
    Image,
    Text,
    TouchableOpacity

} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"



const FeaturedNft = ({title,artist,highestBid,timeAgo,}) => {


  return (
<View style={{
    width:270,
    height:270,
    borderRadius:20,
    margin:10,
    marginLeft:0,
    marginRight:10,
    backgroundColor:'white'


}}>
  <Image
         source={require('../assets/images/nftest.png')}
         style={{
            alignSelf:'center',
            borderRadius:20,
            marginTop:10,
         }} 
         />
         <View style={{
         
            flex:1,
            marginLeft:20,
            marginRight:20,
            marginTop:10,
            

         }}>
            <View style={{
                flex:1,
             // backgroundColor:'yellow',
                flexDirection:'row',
               //marginBottom:'10',
                }}>
                    <View style={{
                flex:1,
               // backgroundColor:'green',
                }}>
                    <Text style={{
                        color:'#131330',
                        fontSize:18,
                        fontWeight:700,
                    }}>
                  {title}
                    </Text>
                    <Text style={{  
                        color:'#393B3E80',
                        fontSize:12,
                        fontWeight:400,
                        }}>by {artist}

                    </Text>
                    </View>
                    <View style={{
                flex:1,
               alignItems:'flex-end'
                
                }} >
                    <View style={{
                       // flex:1,
                      
                    }} >
                        <Text style={{  
                        color:'#393B3E80',
                        fontSize:10,
                        fontWeight:400,
                        }} >
                            Highest Bid
                        </Text>
                      
                    </View>  
                    <View style={{
                      //  flex:1,
                        }}>
                              <Text style={{  
                        color:'#393B3E80',
                        fontSize:12,
                        fontWeight:600,
                        }}>
                            {highestBid}
                        </Text>
                    </View>  
                    </View>
            </View>
            <View style={{
            height:20,
            }}>

            </View>
            <View style={{
                flex:1,
            
             flexDirection:'row'

                }}>
                    <View style={{
                        flex:1,
                        flexDirection:'row',
                        justifyContent:'space-around'
                    }}>
                    <Ionicons style={{
            //  marginLeft:15,
             // marginRight: 4,
             // alignSelf:'center',
            }} name="time-outline" size={22} color={"rgba(57, 59, 62, 1)"} />
              <Text style={{
                        color:'#393B3E',
                        fontSize:13,
                        fontWeight:400,
                    }}>
                        
                        {timeAgo}
                    </Text>

                    </View>
                  <View style={{
                  
                    flex:1,
                  }}>
                    <TouchableOpacity style={{
                    backgroundColor:'#5F61F0',
                   
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:10,
                    width:'70%',
                    height:'60%',
                    alignSelf:'flex-end'

                  }}>
                    <Text style={{
                        color:'#ffffff'
                    }}>
                        Bid
                    </Text>
                    </TouchableOpacity>
                    
                  </View>

                    

            </View>
            
            
         </View>
</View>
);
}

export default FeaturedNft