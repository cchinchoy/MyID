import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import { ImageBackground, Text, SafeAreaView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../utils/styles";
import { ProfilePic, background, Footer } from "../components";
import ButtonScreen from "./ButtonScreen";

const HomeScreen = () => {
  const [name, setName] = useState();
  const isFocused = useIsFocused();

  const getUserData = async () => {
    try {
      let data = await AsyncStorage.getItem("@MyId");
      newdata = JSON.parse(data);

      console.log(newdata.name);
      if (newdata.name !== null) {
        setName(newdata.name);
      }
    } catch (error) {
      alert(error);
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
        <Footer />
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
