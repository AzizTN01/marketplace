import { Web3Button, useContract, useCreateAuctionListing } from '@thirdweb-dev/react-native'
import React, { Fragment,useState } from 'react'
import { View,Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { MARKETPLACE_ADDRESS, NFT_COLLECTION_ADDRESS } from '../utils/contract'

const ProfileAuction = ({selectedItem}) => {
  // console.warn(selectedItem.metadata)
  var today = new Date()
  var afterMonth = new Date(today);
afterMonth.setDate(today.getDate() + 1);
  const [priceItem, setpriceItem] = useState(0);
  const [minimumBid, setminimumBid] = useState(0);
  const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");
  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);
  const { mutateAsync: createAuctionListing } =
  useCreateAuctionListing(marketplace);
 
  async function handleSubmissionAuction() {
    // await checkAndProvideApproval();
    const txResult = await createAuctionListing({
        assetContractAddress: NFT_COLLECTION_ADDRESS,
        tokenId: selectedItem.metadata.id,
        buyoutBidAmount: priceItem,
        minimumBidAmount: minimumBid,
        startTimestamp: new Date(),
        endTimestamp: new Date(afterMonth),
    });
    return txResult;
  }
 
  const handlePriceItem = (text) => {
    setpriceItem(text)
  }
  
  const handleMinimumBid = (text) => {
    setminimumBid(text)
  }

  return (
    <Fragment>
    <View style={{
      width:'80%',
      height:'60%',
      // backgroundColor:'red',
      // backgroundColor:'red',
      alignSelf:'center',
      marginVertical:'5%',
      borderRadius: 20,
      }}>  
      <LinearGradient

colors={['#9fa0f6', '#9fa0f6', '#7f81f3' ,'#4C4EC0']}
start={{x: 1.0, y: 0.0}}
end={{x: 0.0, y: 1.0}}
locations={[0, 0.25, 0.55, 1]}
style={{
flex:1,
//  alignItems:'center',
justifyContent:'space-evenly',
backgroundColor:'#4C4EC0',
borderRadius:12,
alignItems:'center',
justifyContent:'flex-start',

}}>

<View style={{
width:'90%',
// height:'60%',
backgroundColor:'#fff',
marginVertical:'5%',
borderRadius: 10,
//flexDirection:''
}}>
<Text style={{color:'black',fontSize:15,paddingHorizontal:"5%",marginVertical:'5%',fontWeight: 600 }}> 
Enter Price
</Text>
<View style={{flexDirection:'row',backgroundColor:'transparent',justifyContent:'space-between',marginHorizontal: "4%",borderRadius:14,borderWidth:1,borderColor:'gray'}}>
<TextInput style={{
  color:'black',
  marginLeft: 4
}} value={priceItem} onChangeText={handlePriceItem} placeholderTextColor={"gray"} placeholder='Fixed Price'/>
<Text style={{ color:'gray',alignSelf:'center',marginRight: 10 }}>ETH</Text>
</View>

<View style={{flexDirection:'row',backgroundColor:'transparent',justifyContent:'space-between',marginHorizontal: "4%",borderRadius:14,borderWidth:1,borderColor:'gray',marginTop:'3%'}}>
<TextInput style={{
  color:'black',
  marginLeft: 4
}} value={minimumBid} onChangeText={handleMinimumBid} placeholderTextColor={"gray"} placeholder='Minimum Bid Amount'/>
<Text style={{ color:'gray',alignSelf:'center',marginRight: 10 }}>ETH</Text>
</View>

<View style={{ paddingTop: '8%',marginHorizontal:'5%'  }}>
  <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
  <Text style={{ color:'gray' }}>You will recieve</Text>
  <Text style={{ color:'black',fontWeight: '600' }}>{priceItem} ETH</Text>
  </View>
  <View style={{ flexDirection:'row',justifyContent:'space-between',marginTop: '4%',paddingBottom: '5%' }}>
  <Text style={{ color:'gray' }}>Service fee</Text>
  <Text style={{ color:'black',fontWeight: '600' }}>0%</Text>
  </View>
</View>
</View>

</LinearGradient>

     </View>
     <View style={{
      flexDirection:'column',
      alignSelf:'stretch',
      // marginTop:'30%',
      marginBottom:'2%',
      marginHorizontal: '10%',
      // paddingHorizontal: '5%',
      // margin:'5%',
      borderRadius: 15,
      borderWidth: 3,
      padding:3,
      borderColor: "#7f81f3",
       }}>
       <Web3Button
                           contractAddress={MARKETPLACE_ADDRESS}
                           theme="dark"
                           action={async () => {
                            return await handleSubmissionAuction();
                        }}
                        onSuccess={(res)=> console.warn(res)}
                        onError={(err)=>{console.error(err)}}
                                  //  onSuccess={(result) => alert("Success!")}
                                  // onError={(error) =>Navigation.navigate('Error')}
                                     >
                                       Create Listing
                                        
                        </Web3Button>
       </View>
       </Fragment>
  )
}

export default ProfileAuction