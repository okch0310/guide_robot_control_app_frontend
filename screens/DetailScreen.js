import React, { useState, useEffect, useRef } from "react";

import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Video, AVPlaybackStatus } from "expo-av";
//import io from "socket.io-client"; w
import v1 from "../assets/v1.mp4";
import { gstyles } from "./gstyles";

function DetailScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={gstyles.videoContainer}>
      <Video
        ref={video}
        style={gstyles.video}
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
export default DetailScreen;
