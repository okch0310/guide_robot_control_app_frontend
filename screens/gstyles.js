import { StyleSheet } from "react-native";
export const gstyles = StyleSheet.create({
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
