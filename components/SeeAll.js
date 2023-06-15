import React from 'react'
import { View,Text, FlatList } from 'react-native'
import FeaturedNft from './FeaturedNft'

const SeeAll = ({route}) => {
    const {nft,navroute} = route.params
  return (
    <View style={{ flex:1,alignItems:'center' }}>
        <Text style={{color:'black',fontSize: 23}}>SeeAll {navroute}</Text>
        <FlatList 
            style={{ flex: 1, marginVertical:'5%'}}
            keyExtractor={(_,index)=> `direct_listings_${index.toString()}`}
            data={nft}
           showsHorizontalScrollIndicator={false}
              renderItem={({item})=> {
                   return(
                     <View>
                        <FeaturedNft
                            navroute={navroute}
                            item={item}
                            id={nft?.id}
                            title={item?.asset.name} 
                            artist={item?.asset.name} 
                            highestBid={item?.currencyValuePerToken?.displayValue} 
                            currency={item?.currencyValuePerToken?.name}
                            nft={item?.asset.image}
                            owner={item?.creatorAddress}
                            stat={item?.quantity} 
                        />
                        </View> 
                       
                   )
              }}
        />
    </View>
  )
}

export default SeeAll