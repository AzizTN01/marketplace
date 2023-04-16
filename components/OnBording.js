import React from 'react'
import { View ,SafeAreaView,Image,useEffect, FlatList,Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper'



const OnBording = ({}) => {

  // const Images = [
  //   {
  //     id: '1',
  //     title: '../assets/images/1 1.jpg',
  //   },
  //   {
  //     id: '2',
  //     title: '../assets/images/1 1.jpg',
  //   },
  //   {
  //     id: '3',
  //     title: '../assets/images/1 1.jpg',
  //   },
  // ];
   
    
const CustomPagination = (props) => {
  const { index, total } = props;
  return (
    <View style={{ position: 'absolute', top: "50%", left: 0, right: 0 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {[...Array(total).keys()].map((i) => (
          <View
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: i === index ? '#A49BFE' : '#C4C4C4',
            }}
          />
        ))}
      </View>
    </View>
  );
};


return (
<SafeAreaView style={{ flex:1 }}>

   <View 
   style={{
      flex:1,
      backgroundColor:'white'
      
      }}>
         <LinearGradient 
     colors={['#dfdffc','#ffffff','#dfdffc']} 
     start={{x: 1.0, y: 0.0}} end={{x: 0.0, y: 1.0}}
      style={{ flex:1}}>
    <Swiper 
      activeDotColor='#A49BFE'
      paginationStyle={{ justifyContent: 'center' }}
      renderPagination={(index, total, context) => <CustomPagination index={index} total={total} />}
    >
    
        <View style={{
        
          flex:1,
          marginTop:85,
          marginBottom:60,
          margin:40,
          justifyContent:'space-between'

      
      }}>
        <View style={{flex:1}}>
          {/* <Swiper>
          <View style={{flex:1,backgroundColor:'red'}}>

          </View>
          <View style={{flex:1,backgroundColor:'green'}}>

          </View>
          </Swiper> */}


        </View>
        <View style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          marginTop:100
          }}>
          <Text style={{
            flex:1,
            color:'#393B3E',
            fontSize:24,
          }}>
            First Open App
          </Text>
          <Text style={{
            flex:1,
            fontSize:12,
            color: '#9999A7',
            margin:14,
            }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
         
              <LinearGradient 
              colors={['#4C4EC0','#9fa0f6']} 
              start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}}
              style={{ 
                flex:1,
                backgroundColor:'#7f81f3',
                width:285,
                height:55,
                alignItems:'center',
                justifyContent:'center',
                borderRadius:20,
                marginTop:24,
              }}>
              <Text style={{color:'#ffffff',fontSize:18}}>
                Next
              </Text>
              </LinearGradient>
              
            
          
          <View style={{
            flex:1,
            
            width:300,
            height:500,
            alignItems:'center',
            justifyContent:'center',

            
            
            }}>
              <Text style={{color:'#9999A7',fontSize:18}}>
                Skip
              </Text>
            
          </View>
          
          </View>

        </View>
     


    
        <View style={{
        
          flex:1,
          marginTop:85,
          marginBottom:60,
          margin:40,
          justifyContent:'space-between'

      
      }}>
        <View style={{flex:1}}>
          {/* <Swiper>
          <View style={{flex:1,backgroundColor:'red'}}>

          </View>
          <View style={{flex:1,backgroundColor:'green'}}>

          </View>
          </Swiper> */}


        </View>
        <View style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          marginTop:100
          }}>
          <Text style={{
            flex:1,
            color:'#393B3E',
            fontSize:24,
          }}>
            Select a Service
          </Text>
          <Text style={{
            flex:1,
            fontSize:12,
            color: '#9999A7'
            }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
         
              <LinearGradient
              
              colors={['#4C4EC0','#9fa0f6']} 
              start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}}
              style={{ 
                flex:1,
                backgroundColor:'#7f81f3',
                width:285,
                height:55,
                alignItems:'center',
                justifyContent:'center',
                borderRadius:20,
                marginTop:24,
              }}>
              <Text style={{color:'#ffffff',
              fontSize:18
              }}>
                Next
              </Text>

             

              </LinearGradient>
              
            
          
          <View style={{
            flex:1,
            
            width:300,
            height:500,
            alignItems:'center',
            justifyContent:'center',

            
            
            }}>
              <Text style={{color:'#9999A7',fontSize:18}}>
                Skip
              </Text>
            
          </View>
          
          </View>

        </View>
     

    </Swiper>
    </LinearGradient>
   </View>
     
   </SafeAreaView>
);
}

export default OnBording