import { useContract, useSDK } from "@thirdweb-dev/react-native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
// import { ListingType } from "@thirdweb-dev/sdk";
import Replicate from "replicate";
import axios from "axios";
import Feather from "react-native-vector-icons/Feather";

const Address = "0x245d1343EC0dE0dBE5730dD38D2fB6dfdecbfdaF";
const replicate = new Replicate({
  auth: "272cf1e7ead952ace8664f77eb638a77175b3b84",
});
const Mintnft = ({ route }) => {

  const { contract } = useContract(Address);
  const sdk = useSDK();
  const mintNft = async () => {
    collectionAddress = await sdk.deployer.deployNFTCollection({
      name: "Fruit Basket",
      symbol: "FRUIT",
      primary_sale_recipient: "0x2ED0fE9a8FbB3b7f0ffC45a18eff8f0c3A0ABE2C",
      image:
        "https://bafkreie4zdcentifeqoukitd32lvd3k3kr3y5va7kqfdewd7budjkoanui.ipfs.nftstorage.link/",
      description: "A fruit basket that lives on the Rinkeby blockchain! 🍎🧺",
      /* Optional fields below */
      //platform_fee_recipient: "0x00000",
      //platform_fee_basis_points: "5",
      //fee_recipient: "0x00000",
      //seller_fee_basis_points: "10",
      //external_link: "YOUR_HTTP_URL",
      //Descriptions for the fields above can be found here: https://portal.thirdweb.com/typescript/sdk.nftcontractdeploymetadata
    });
    const nftCollection = await sdk.getNFTCollection(collectionAddress);
    mintTxnHash = await nftCollection.mintToSelf?.({
      name: "Orange",
      description: "An orange living on the Rinkeby blockchain",
      image:
        "https://bafkreidxzweunukaruhyfvepkjrep76vi75y6yl5fq3pqedallz6nwoori.ipfs.nftstorage.link/",
      properties: {
        "Orange Type": "Navel", // Optional field to set attributes
      },
    });
    console.log(
      "Minted NFT Transaction Hash: ",
      mintTxnHash.receipt.transactionHash
    );
  };
  const generateImg = async () => {
    const output = await replicate.run(
      "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
      {
        input: {
          prompt: "a vision of paradise. unreal engine"
        }
      }
    );
    console.log("IMG", output)
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "red",
        marginBottom: "15%",
      }}
    >
      <LinearGradient
        colors={["#D7D3FF", "white", "white", "#D7D3FF"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.35, 0.65, 1]}
        style={{ flex: 1 }}
      >
        <View
          style={{
            //backgroundColor: 'green',
            flex: 1,
            flexDirection: "column",
            // justifyContent:'center',
            alignContent: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "10%",
              //  backgroundColor:'red',
              margin: "5%",
              // flexDirection:'column',
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 24,
                fontWeight: 600,
                paddingLeft: "5%",
              }}
            >
              Mint NFt
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              height: "75%",
              // backgroundColor:'red',
              margin: "5%",
              flexDirection: "column",
              // justifyContent:'center'
            }}
          >
            <LinearGradient
              colors={["#A49BFE80", "#5F61F080"]}
              style={{
                flexDirection: "row",
                // backgroundColor: 'yellow',
                borderColor: "transparent",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
                // marginBottom:5,
              }}
            >
              <View
                style={{
                  // backgroundColor:'red',
                  // padding:1,
                  borderColor: "transparent",
                  borderWidth: 1,
                  borderRadius: 10,
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    flexDirection: "row",
                    width: "100%",
                    borderRadius: 10,
                  }}
                >
                  <Feather
                    style={{
                      marginLeft: 15,
                      marginRight: 4,
                      alignSelf: "center",
                    }}
                    name="smile"
                    size={20}
                    color={"rgba(153, 153, 167, 0.5)"}
                  />
                  <TextInput
                    placeholder="name of your NFT"
                    placeholderTextColor={"rgba(153, 153, 167, 0.5)"}
                    style={{
                      width: "100%",
                      paddingVertical: 8,
                      color: "black",
                    }}
                  ></TextInput>
                </View>
              </View>
            </LinearGradient>
            <LinearGradient
              colors={["#A49BFE80", "#5F61F080"]}
              style={{
                flexDirection: "row",
                // backgroundColor: 'yellow',
                borderColor: "transparent",
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
                // marginBottom:5,
              }}
            >
              <View
                style={{
                  // backgroundColor:'red',
                  // padding:1,
                  borderColor: "transparent",
                  borderWidth: 1,
                  borderRadius: 10,
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    flexDirection: "row",
                    width: "100%",
                    borderRadius: 10,
                  }}
                >
                  <Feather
                    style={{
                      marginLeft: 15,
                      marginRight: 4,
                      alignSelf: "center",
                    }}
                    name="smile"
                    size={20}
                    color={"rgba(153, 153, 167, 0.5)"}
                  />
                  <TextInput
                    placeholder="description of you're NFT "
                    placeholderTextColor={"rgba(153, 153, 167, 0.5)"}
                    style={{
                      width: "100%",
                      paddingVertical: 8,
                      color: "black",
                    }}
                  ></TextInput>
                </View>
              </View>
            </LinearGradient>
            <View
              style={{
                width: "100%",
                justifyContent: "space-evenly",
                gap: 20,
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "50%",
                  height: 50,
                  backgroundColor: "#9798f4",
                  borderRadius: 10,
                  elevation: 3,
                  justifyContent: "center", alignItems: "center"
                }}
              >
                <Text style={{ color: "#FFFF" }}>Upload Image</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "50%",
                  height: 50,
                  backgroundColor: "#9798f4",
                  borderRadius: 10,
                  elevation: 3, justifyContent: "center", alignItems: "center"
                }}
              >
                <Text style={{ color: "#FFFF" }}>Generate Image</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Mintnft;
