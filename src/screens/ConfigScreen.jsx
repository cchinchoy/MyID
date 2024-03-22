import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../utils/styles";

import { background, ProfilePic, Footer } from "../components";
import Defaults from "../components/Defaults";
// import  from "../components/Footer";
const ConfigScreen = () => {
  const [name, setName] = useState();
  useEffect(() => {
    const loadData = async () => {
      const storedData = await AsyncStorage.getItem("@MyId");
      if (!storedData) {
        Defaults();
      }
    };
    loadData();
  }, []);

  const save = async () => {
    try {
      let currentData = await AsyncStorage.getItem("@MyId");
      let cdata = JSON.parse(currentData);
      cdata.name = name;
      console.log(cdata);
      // await AsyncStorage.setItem("@MyId", JSON.stringify(cdata));
      // setName("");
    } catch (error) {
      Alert.alert(error);
    } finally {
      Keyboard.dismiss();
    }
  };

  const remove = async () => {
    try {
      await AsyncStorage.removeItem("@MyId");
      setName(null);
    } catch (error) {
      Alert.alert(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <ProfilePic />
        <TextInput
          value={name}
          style={styles.input}
          placeholder="Enter your Name"
          onChangeText={(text) => setName(text)}
        />
        <View style={styles.rowcontainer}>
          <TouchableOpacity style={styles.btn} onPress={() => save()}>
            <Text style={styles.btntext}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => remove()}>
            <Text style={styles.btntext}>Remove</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default ConfigScreen;
