import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import io from "socket.io-client";
import { gstyles } from "./gstyles";

var array = [0];
var ip = "hello";
function navi() {
  console.log("nav");
  navigation.navigate("Details");
}
function HomeScreen({ navigation }) {
  const [messageToSend, setMessageToSend] = useState("");
  const socket = useRef(null);
  useEffect(() => {
    socket.current = io(ip);
  }, [ip]);
  /////
  /////
  const sendMessage = () => {
    socket.current.emit("message", messageToSend);
    ip = messageToSend;
    setMessageToSend("");

    console.log("ip:" + ip);
    console.log("sendMessage 함수");
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
    /////
    /////
    //버튼 배열 정보
    const sendMessage = () => {
      socket.current.emit(
        "message",

        array[0] +
          "," +
          array[1] +
          "," +
          array[2] +
          "," +
          array[3] +
          "," +
          array[4] +
          "," +
          array[5] +
          "," +
          array[6] +
          "," +
          array[7] +
          "," +
          array[8] +
          "," +
          array[9] +
          "," +
          4 +
          "," +
          1
      );
      setMessageToSend("");
    };

    console.log(array);
    sendMessage();

    array = [0];
  }
  return (
    <View style={gstyles.container}>
      <StatusBar style="black" />

      <View style={gstyles.header}>
        <TextInput
          value={messageToSend}
          onChangeText={(text) => setMessageToSend(text)}
          placeholder="ip 주소 입력"
          onSubmitEditing={sendMessage}
        />
      </View>

      <View style={gstyles.body}>
        <View style={gstyles.btnContainer}>
          <TouchableOpacity
            style={gstyles.button}
            onPress={() => {
              setBtn1(btn1 + 1);
            }}
          >
            <Image
              source={
                btn1 % 2
                  ? require("../assets/1.png")
                  : require("../assets/2.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.button}
            onPress={() => {
              setBtn2(btn2 + 1);
            }}
          >
            <Image
              source={
                btn2 % 2
                  ? require("../assets/3.png")
                  : require("../assets/4.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.button}
            onPress={() => {
              setBtn3(btn3 + 1);
            }}
          >
            <Image
              source={
                btn3 % 2
                  ? require("../assets/5.png")
                  : require("../assets/6.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.button}
            onPress={() => {
              setBtn4(btn4 + 1);
            }}
          >
            <Image
              source={
                btn4 % 2
                  ? require("../assets/7.png")
                  : require("../assets/8.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.button}
            onPress={() => {
              setBtn5(btn5 + 1);
            }}
          >
            <Image
              source={
                btn5 % 2
                  ? require("../assets/9.png")
                  : require("../assets/10.png")
              }
            />
          </TouchableOpacity>
        </View>
        <View style={gstyles.btnContainer}>
          <TouchableOpacity
            style={gstyles.button}
            onPress={() => {
              setBtn6(btn6 + 1);
            }}
          >
            <Image
              source={
                btn6 % 2
                  ? require("../assets/11.png")
                  : require("../assets/12.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.button}
            onPress={() => {
              setBtn7(btn7 + 1);
            }}
          >
            <Image
              source={
                btn7 % 2
                  ? require("../assets/13.png")
                  : require("../assets/14.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.button}
            onPress={() => {
              setBtn8(btn8 + 1);
            }}
          >
            <Image
              source={
                btn8 % 2
                  ? require("../assets/15.png")
                  : require("../assets/16.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.button}
            onPress={() => {
              setBtn9(btn9 + 1);
            }}
          >
            <Image
              source={
                btn9 % 2
                  ? require("../assets/17.png")
                  : require("../assets/18.png")
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={gstyles.button}
            onPress={() => {
              setBtn10(btn10 + 1);
            }}
          >
            <Image
              source={
                btn10 % 2
                  ? require("../assets/19.png")
                  : require("../assets/20.png")
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={gstyles.tail}>
        <TouchableOpacity
          style={gstyles.buttonB}
          onPress={() => {
            navigation.navigate("Details");
            pressGuideStartBtn();
          }}
        >
          <Text>안내 시작</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={gstyles.buttonB}
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

export default HomeScreen;
