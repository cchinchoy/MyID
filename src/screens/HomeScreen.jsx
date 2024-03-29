import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import { ImageBackground, Text, SafeAreaView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../utils/styles";
import {
  ProfilePic,
  Background,
  Footer,
  Spacer,
  Defaults,
} from "../components";
import ButtonScreen from "./ButtonScreen";

const HomeScreen = () => {
  const [name, setName] = useState();
  const isFocused = useIsFocused();

  const getUserData = async () => {
    try {
      let data = await AsyncStorage.getItem("@MyId");
      console.log(data);
      if (!data) {
        Defaults();
      } else {
        cdata = JSON.parse(data);
        setName(cdata.name);
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
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >
        <ProfilePic />
        <Spacer />
        <View style={styles.titlecontainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <Spacer />
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
