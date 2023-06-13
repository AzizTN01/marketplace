
import React,{useState} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  ConnectWallet,
  useUser,
  useContract,
  ThirdwebProvider,
  useContractMetadata,
  useDirectListings,
  useActiveListings,
} from '@thirdweb-dev/react-native';
import LinearGradient from 'react-native-linear-gradient';
import Splash from "./components/Splash";
import Navigation from './components/Navigation';
import SingIn from './components/SingIn';
import Error from './components/error';
import{NavigationContainer} from '@react-navigation/native';

//import Navigator from './components/Navigator';


const Address ='0x8D3bc1C6B16c885Aa8F5241340De968F2F54A67f';

const App = () => {
  const [state] = useState(0);


  return (

  <ThirdwebProvider
  //  activeChain={{
  //   chain: "eth",
  //   rpc: ["https://eth-goerli.g.alchemy.com/v2/7zeNLEQVEMwx_6x_h1eso1q0-o_iPl2e"],
  //   chainId: 5
  //  }}
  // activeChain={"goerli"}
  activeChain={{
    // === Required information for connecting to the network === \\
    chainId: 5, // Chain ID of the network
    // Array of RPC URLs to use
    rpc: ["https://eth-goerli.g.alchemy.com/v2/7zeNLEQVEMwx_6x_h1eso1q0-o_iPl2e"],

    // === Information for adding the network to your wallet (how it will appear for first time users) === \\
    // Information about the chains native currency (i.e. the currency that is used to pay for gas)
    nativeCurrency: {
      decimals: 18,
      name: "Goerli ETH",
      symbol: "ETH",
    },
    shortName: "eth", // Display value shown in the wallet UI
    slug: "geth", // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: "Goerli ETH", // Name of the network
    name: "Goerli testnet", // Name of the network
  }}

  >   
  
<Navigation/>

     {/* <NavigationContainer> 
    <Navigator/>
   </NavigationContainer> */}
  </ThirdwebProvider>
  );
};

const Market = () => {
  const { user, isLoggedIn, isLoading } = useUser();
  
  return(
    <>
     {isLoggedIn &&  <Navigation />}
     {!isLoggedIn && <SingIn/>}
    </>
   
  )
}

const AppInner = () => {
 
  const { contract } = useContract(Address);
  const { data:Metadata } = useContractMetadata(contract);
  const { user, isLoggedIn, isLoading } = useUser();

 // const { data:nft, isLoading, } = useDirectListings(contract);

  return (
   <LinearGradient   
   colors={['#D7D3FF', 'white', 'white' ,'#D7D3FF']}
   start={{ x: 0, y: 1 }}
   end={{ x: 1, y: 0 }}
   locations={[0, 0.35, 0.65, 1]}
     style={{ flex:1}}>
<View style={{
        flex:1,
        flexDirection:'column',
        alignItems:'center'
        }}>
           <Image
         source={require('./assets/images/logo_v.png')}
         style={{width:150,height:150 ,justifyContent:'center' }} 
         />
        <Text style={{
          color: "#000",
          fontSize: 30,
          fontWeight: "bold"
        }}
        >{Metadata?.name}
        </Text>

        <Text style={{
          color:'black',
          fontSize:30,
          fontWeight:"500",
        }} >{Metadata?.description}
        </Text>
      
        { contract &&(
          // <View style={{backgroundColor:'#fff'}}> </View>
          <View>      
                
          </View>
        )
        }
        { !contract &&(
         <ConnectWallet />
        )
        }
      </View> 
   </LinearGradient>
      

    
  );
};
// const  navigation = () => {
//   return (   
//      <NavigationContainer> 
//     <Navigator/>
//    </NavigationContainer>
// )
// }



export default App;
