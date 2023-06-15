import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
// import {} from "react-native-vector"
import CheckBox from "@react-native-community/checkbox";
import Feather from "react-native-vector-icons/Feather";
import {
  ConnectWallet,
  useContract,
  useDirectListings,
  useContractMetadata,
  MediaRenderer,
  useDirectListing,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react-native";

const Address = "0x8D3bc1C6B16c885Aa8F5241340De968F2F54A67f";
const tokenid = 0;

const SignUp = ({}) => {
  const [checkboxval, setcheckboxval] = useState(false);
  const toggleCheckbox = () => {
    setcheckboxval(!checkboxval);
  };
  const { contract } = useContract(Address);
  const { data: Metadata } = useContractMetadata(contract);
  const { data: nft, isLoading } = useDirectListings(contract);
  const { data: nfts } = useDirectListing(contract, tokenid);
  const image = nfts?.asset.image;

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
                marginTop: "5%",
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
                flex: 4,
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
                Sign Up to continue
              </Text>
              <Text
                style={{
                  color: "#454459",
                  textAlign: "center",
                  padding: "5%",
                  //  padding:10,
                  fontSize: 14,
                }}
              >
                Give us some of your information to get free access fieldly.
              </Text>
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
                      name="user"
                      size={20}
                      color={"rgba(153, 153, 167, 0.5)"}
                    />
                    <TextInput
                      placeholder="Your Name"
                      placeholderTextColor={"rgba(153, 153, 167, 0.5)"}
                      style={{
                        width: "100%",
                        paddingVertical: 8,
                        color: "black",
                      }}
                    >
                      {image}
                    </TextInput>
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
                      name="mail"
                      size={20}
                      color={"rgba(153, 153, 167, 0.5)"}
                    />
                    <TextInput
                      placeholder="Your Email"
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
                      name="lock"
                      size={20}
                      color={"rgba(153, 153, 167, 0.5)"}
                    />
                    <TextInput
                      placeholder="Your Password"
                      placeholderTextColor={"black)"}
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
                      name="lock"
                      size={20}
                      color={"rgba(153, 153, 167, 0.5)"}
                    />
                    <TextInput
                      placeholder="confirm Password"
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
                  borderColor: "#9999A7",
                  flexDirection: "row",
                  padding: 16,
                  paddingLeft: 0,
                  alignSelf: "flex-start",
                  // backgroundColor:'red'
                }}
              >
                <CheckBox
                  disabled={false}
                  value={checkboxval}
                  onChange={toggleCheckbox}
                  tintColor={"red"}
                  onFillColor={"red"}
                  tintColors={{ true: "#A49BFE80", false: "#A49BFE80" }}
                />
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 14,
                    color: "#9999A7",
                  }}
                >
                  By creating an account you agree to the terms of use and our
                  privacy policy.
                </Text>
              </View>
              <View style={{ alignSelf: "center" }}>
                <LinearGradient
                  colors={["#4C4EC0", "#9fa0f6"]}
                  start={{ x: 1.0, y: 1.0 }}
                  end={{ x: 0.0, y: 0.0 }}
                  style={{
                    backgroundColor: "#7f81f3",
                    width: 285,
                    height: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    marginTop: 5,
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 18,
                    }}
                  >
                    Sign In
                  </Text>
                </LinearGradient>
              </View>

              <View
                style={{
                  // backgroundColor:'red',
                  // flex:1,
                  // marginTop:'30px',
                  alignSelf: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  // alignItems:'center',
                  marginTop: "5%",
                }}
              >
                <Text
                  style={{
                    // padding:10,
                    fontSize: 14,
                    color: "#393B3E",
                    textAlign: "center",
                  }}
                >
                  Already Have Any acount?
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#7F81F3",
                    fontWeight: "bold",
                    marginLeft: "1%",
                    // marginTop:''
                    // alignSelf:'center'
                  }}
                >
                  Sign In
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
      {/* <Text>AAA</Text> */}
      {/* <Splash /> */}
    </SafeAreaView>
  );
};

export default SignUp;
