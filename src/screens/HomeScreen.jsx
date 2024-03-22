import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import { ImageBackground, Text, SafeAreaView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { brands } from "../components";
import styles from "../utils/styles";

import { LinkCardComponent, ProfilePic } from "../components";
import ButtonScreen from "./ButtonScreen";
const background = {
  uri: "https://images.pexels.com/photos/3873913/pexels-photo-3873913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
const HomeScreen = () => {
  const [name, setName] = useState();
  const isFocused = useIsFocused();

  const getUserData = async () => {
    try {
      let name = await AsyncStorage.getItem("MyName");
      if (name !== null) {
        setName(name);
      }
    } catch (error) {
      alert(err);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getUserData();
    }
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <ProfilePic />
        <View style={styles.spacer} />
        <View style={styles.titlecontainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.btncontainer}>
          <ButtonScreen />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footertext}>Develop/Disrupt/Destroy</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
