import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
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
