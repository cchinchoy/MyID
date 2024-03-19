import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    width: "75%",
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#000000c0",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 25,
  },
  btntext: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
    position: "fixed",
  },
  profileimage: {
    position: "absolute",
    top: 50,
    height: 150,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 999,
  },
  profilepic: {
    height: 150,
    width: 150,
    borderRadius: 999,
  },
  titlecontainer: {
    position: "absolute",
    top: 200,
    alignSelf: "center",
  },
  text: {
    color: "#000000",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    paddingLeft: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    width: "75%",
    backgroundColor: "#ffffffc0",
  },
  infocard: {
    height: 100,
    width: 100,
    borderRadius: 25,
    backgroundColor: "#000000",

    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  infolabel: {
    color: "#ffffff",
  },
  spacer: {
    padding: 8,
    marginHorizontal: 8,
  },

  btncontainer: {
    position: "absolute",
    top: Platform.OS === "android" ? 250 : 150,
    justifyContent: "space-around",
    flexDirection: "row",
    height: 400,
    width: "100%",
    flexWrap: "wrap",
    paddingVertical: 50,
    marginTop: 50,
    marginBottom: 100,
  },
  imagebutton: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
    margin: 15,
    borderRadius: 999,
  },
  footer: {
    position: "absolute",
    bottom: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    marginHorizontal: 25,
  },
  footertext: {
    fontWeight: "bold",
  },
});

export default styles;
