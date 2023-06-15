import React, { useEffect, useMemo, useState } from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
// import {} from "react-native-vector"
import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractMetadata,
  useDirectListings,
  useUser,
} from "@thirdweb-dev/react-native";

const Address = "0x8D3bc1C6B16c885Aa8F5241340De968F2F54A67f";

const SingIn = ({ navigation }) => {
  const [checkboxval, setcheckboxval] = useState(false);
  const toggleCheckbox = () => {
    setcheckboxval(!checkboxval);
  };
  const { user, isLoggedIn, isLoading } = useUser();

  const { contract } = useContract(Address);
  const { data: Metadata } = useContractMetadata(contract);
  const address = useAddress();
  const { data: nft, } = useDirectListings(contract);

  useEffect(() => {
    console.log("Is logged In", isLoggedIn)
    if (address) {
      navigation.replace('main')
    }
  }, [address])
  useMemo(() => {
    console.log("Address", address)
  }, [address])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
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
              flex: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                marginTop: "8%",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Image
                source={require("../assets/images/logo_v.png")}
                style={{
                  width: 120,
                  height: 120,
                  justifyContent: "flex-start",
                }}
              />
            </View>
            <View
              style={{
                // backgroundColor:'blue',
                flex: 3,
                paddingHorizontal: "12%",
                // justifyContent:'center',
                // alignSelf:'center'
                // alignItems:'center',
              }}
            >
              <Text
                style={{
                  color: "#454459",
                  textAlign: "center",
                  //  padding:10,
                  fontSize: 18,
                }}
              >
                Connect Wallet to continue
              </Text>
              <ConnectWallet />

            </View>
          </View>
        </LinearGradient>
      </View>

    </SafeAreaView>
  );
};

export default SingIn;
