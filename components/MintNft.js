import {
  useAddress,
  useContract,
  useSDK,
  useStorage,
  useStorageUpload,
} from "@thirdweb-dev/react-native";
import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
// import { ListingType } from "@thirdweb-dev/sdk";
import Feather from "react-native-vector-icons/Feather";
import Replicate from "replicate";
import axios from "axios";
import { err } from "react-native-svg/lib/typescript/xml";
const Address = "0x245d1343EC0dE0dBE5730dD38D2fB6dfdecbfdaF";
const replicate = new Replicate({
  auth: "272cf1e7ead952ace8664f77eb638a77175b3b84",
});
const Mintnft = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const storage = useStorage();
  const [nftName, setNFTName] = useState("");
  const [nftDesc, setNftDesc] = useState("");
  const [nftSymbol, setNftSymbol] = useState("");
  const [loading, setloading] = useState(false);
  const [aiText, setAiText] = useState("");
  const [collectionAddress, setCollectionAddress] = useState("");
  const { contract: collection } = useContract(collectionAddress);

  const [localFile, setLocalFile] = useState(null);
  const { contract } = useContract(Address);
  const [img, setImg] = useState(null);
  const userAdr = useAddress();
  const sdk = useSDK();
  const uploadLocalFile = async () => {
    const localImg = await launchImageLibrary();
    console.log("Local", localImg["assets"][0]);
    const imgFile = localImg.assets[0];
    setLocalFile(imgFile);
    const imgToUpload = {
      uri: imgFile.uri,
      type: imgFile.type,
      name: imgFile.fileName,
    };
    console.log("To Uplaod", imgToUpload);
    const formData = new FormData();
    formData.append("file", imgToUpload);
    setloading(true);
    const resp = axios.post(
      `https://azure-millipede-kilt.cyclic.app/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    resp
      .then((resp) => {
        console.log("resp", resp.data);
        setImg(resp.data.url);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
    // } catch (error) {
    //   console.log("Error", error.message)
    // }
  };
  const mintNft = async () => {
    try {
      const contractAddress = await sdk.deployer.deployNFTCollection({
        name: nftName,
        symbol: nftSymbol,
        // this address comes from connected wallet address
        primary_sale_recipient: userAdr,
      });
      const collectionContract = await sdk.getContract(contractAddress)
      //setCollectionAddress(contractAddress);
      const metadata = {
        name: nftName,
        description: nftDesc,
        image: img,
      };

      const resp = await collectionContract.mintTo(userAdr, metadata);
      console.log("Resp", resp)
    } catch (error) {
      console.log("Error", error.message)
    }
  };
  const generateImg = async () => {
    const output = await replicate.run(
      "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
      {
        input: {
          prompt: aiText,
        },
      }
    );
    console.log("TEXT", aiText);
    console.log("IMG", output);
    setImg(output[0]);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: "red",
        marginBottom: "15%",
        justifyContent: "flex-start",
        gap: 0,
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Write a description for image to be generated
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
                    paddingLeft: 10,
                  }}
                >
                  <TextInput
                    placeholder="Text Here"
                    placeholderTextColor={"rgba(153, 153, 167, 0.5)"}
                    value={aiText}
                    onChangeText={(text) => {
                      setAiText(text);
                    }}
                    style={{
                      width: "100%",
                      paddingVertical: 8,
                      color: "black",
                    }}
                  />
                </View>
              </View>
            </LinearGradient>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                flexDirection: "row",
                paddingTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "50%",
                  padding: 10,
                  backgroundColor: "#9798f4",
                  borderRadius: 10,
                  elevation: 3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: "#FFFF" }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "50%",
                  padding: 10,
                  backgroundColor: "#9798f4",
                  borderRadius: 10,
                  elevation: 3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  generateImg();
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: "#FFFF" }}>Generate</Text>
              </TouchableOpacity>
            </View>
            {img && (
              <Image
                source={{ uri: img }}
                style={{ width: 250, height: 150, resizeMode: "contain" }}
              />
            )}
          </View>
        </View>
      </Modal>
      <LinearGradient
        colors={["#D7D3FF", "white", "white", "#D7D3FF"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.35, 0.65, 1]}
        style={{ flex: 1 }}
      >
        <View
          style={{
            //backgroundColor: "green",
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
              //backgroundColor:'red',

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
              height: "85%",
              //backgroundColor: "red",
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
                    value={nftName}
                    onChangeText={(text) => {
                      setNFTName(text);
                    }}
                  />
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
                    placeholder="Symbol of you're NFT "
                    placeholderTextColor={"rgba(153, 153, 167, 0.5)"}
                    style={{
                      width: "100%",
                      paddingVertical: 8,
                      color: "black",
                    }}
                    value={nftSymbol}
                    onChangeText={(text) => {
                      setNftSymbol(text);
                    }}
                  />
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
                    value={nftDesc}
                    onChangeText={(text) => {
                      setNftDesc(text);
                    }}
                  />
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
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  uploadLocalFile();
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
                  elevation: 3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Text
                  style={{ color: "#FFFF" }}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  Generate Image
                </Text>
              </TouchableOpacity>
            </View>
            {loading ? (
              <ActivityIndicator size={"large"} color={"blue"} />
            ) : (
              img && (
                <Image
                  source={{ uri: img }}
                  style={{
                    width: "100%",
                    height: 120,
                    resizeMode: "contain",
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
              )
            )}
            <TouchableOpacity
              style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#9798f4",
                borderRadius: 10,
                elevation: 3,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 5,
              }}
              onPress={() => {
                mintNft();
              }}
            >
              <Text style={{ color: "#FFFF" }}>Mint Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Mintnft;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: Dimensions.get("screen").width * 0.8,
    height: 215,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
