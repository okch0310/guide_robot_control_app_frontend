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
//import io from "socket.io-client"; w
import v1 from "./assets/v1.mp4";
import HomeScreen from "./screens/HomeScreen";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
var array = [0];
var ip = "hello";
function navi() {
  console.log("nav");
  navigation.navigate("Details");
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
        isLooping="true"
        shouldPlay
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "국립 대구 과학관",
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
    backgroundColor: "black",
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
