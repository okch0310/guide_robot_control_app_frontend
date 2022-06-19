import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Video, AVPlaybackStatus } from "expo-av";
import io from "socket.io-client";
import v1 from "./assets/v1.mp4";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
var array = [0];

function navi() {
  console.log("nav");
  navigation.navigate("Details");
}
function HomeScreen({ navigation }) {
  const [messageToSend, setMessageToSend] = useState("");
  const socket = useRef(null);
  useEffect(() => {
    socket.current = io("http://192.168.35.84:3001");
  }, []);

  const sendMessage = () => {
    socket.current.emit("message", messageToSend);
    setMessageToSend("");
  };
  const [btn1, setBtn1] = useState(0);
  const [btn2, setBtn2] = useState(0);
  const [btn3, setBtn3] = useState(0);
  const [btn4, setBtn4] = useState(0);
  const [btn5, setBtn5] = useState(0);
  const [btn6, setBtn6] = useState(0);
  const [btn7, setBtn7] = useState(0);
  const [btn8, setBtn8] = useState(0);
  const [btn9, setBtn9] = useState(0);
  const [btn10, setBtn10] = useState(0);

  function pressGuideStartBtn() {
    // if (btn1 == true) {
    //   array = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // }

    array = [
      btn1 % 2,
      btn2 % 2,
      btn3 % 2,
      btn4 % 2,
      btn5 % 2,
      btn6 % 2,
      btn7 % 2,
      btn8 % 2,
      btn9 % 2,
      btn10 % 2,
    ];
    const sendMessage = () => {
      socket.current.emit("message", array);
      setMessageToSend("");
    };

    console.log(array);
    sendMessage();

    array = [0];
  }
  return (
    <View style={styles.container}>
      <StatusBar style="black" />

      <View style={styles.header}>
        <TextInput
          value={messageToSend}
          onChangeText={(text) => setMessageToSend(text)}
          placeholder="enter messasse"
          onSubmitEditing={sendMessage}
        />
      </View>

      <View style={styles.body}>
        <View style={styles.btnContainer}>
          {/* 버튼 시작 */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setBtn1(btn1 + 1);
              //console.log(btn1);
            }}
          >
            <Image
              source={
                btn1 % 2 ? require("./assets/1.png") : require("./assets/2.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setBtn2(btn2 + 1);
              //   console.log(btn2);
            }}
          >
            <Image
              source={
                btn2 % 2 ? require("./assets/3.png") : require("./assets/4.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setBtn3(btn3 + 1);
              //  console.log(btn3);
            }}
          >
            <Image
              source={
                btn3 % 2 ? require("./assets/5.png") : require("./assets/6.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setBtn4(btn4 + 1);
              // console.log(btn4);
            }}
          >
            <Image
              source={
                btn4 % 2 ? require("./assets/1.png") : require("./assets/2.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setBtn5(btn5 + 1);
              //console.log(btn1);
            }}
          >
            <Image
              source={
                btn5 % 2 ? require("./assets/1.png") : require("./assets/2.png")
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          {/* 버튼 시작 */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setBtn6(btn6 + 1);
              //console.log(btn1);
            }}
          >
            <Image
              source={
                btn6 % 2 ? require("./assets/1.png") : require("./assets/2.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setBtn7(btn7 + 1);
              //console.log(btn1);
            }}
          >
            <Image
              source={
                btn7 % 2 ? require("./assets/1.png") : require("./assets/2.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setBtn8(btn8 + 1);
              //console.log(btn1);
            }}
          >
            <Image
              source={
                btn8 % 2 ? require("./assets/1.png") : require("./assets/2.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setBtn9(btn9 + 1);
              //console.log(btn1);
            }}
          >
            <Image
              source={
                btn9 % 2 ? require("./assets/1.png") : require("./assets/2.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setBtn10(btn10 + 1);
              //console.log(btn1);
            }}
          >
            <Image
              source={
                btn10 % 2
                  ? require("./assets/1.png")
                  : require("./assets/2.png")
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tail}>
        <TouchableOpacity
          style={styles.buttonB}
          onPress={() => {
            navigation.navigate("Details");
            pressGuideStartBtn();
          }}
        >
          <Text>안내 시작</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonB}
          onPress={() => {
            alert("you clicked me");
          }}
        >
          <Text>안내 중지</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailsScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.videoContainer}>
      <Video
        ref={video}
        style={styles.video}
        source={v1}
        //uri:"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        useNativeControls
        resizeMode="contain"
        isLooping
        shouldPlay="true"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////아이피 주소////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
function App() {
  useEffect(function () {
    io("http://192.168.0.21:3001");
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "대구 과학관",
            headerStyle: {
              backgroundColor: "#dce5d2",
            },

            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#e0e8d77",
  },
  header: {
    flex: 0.55,
    //backgroundColor: "red",
    backgroundColor: "#dce5d2",
  },

  body: {
    flex: 3.5,
    backgroundColor: "#bfd1ae",
  },

  tail: {
    flex: 1,
    backgroundColor: "#96b379",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",

    // width: 200,
    // height: 50,
    // borderRadius: 30,
    // marginBottom: 15,
  },

  btnContainer: {
    flex: 1,
    //backgroundColor: "#fff",
    backgroundColor: "#bfd1ae",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },

  button: {
    //backgroundColor: "#859a9b",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },

  buttonB: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    paddingLeft: 70,
    paddingRight: 70,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});
export default App;
