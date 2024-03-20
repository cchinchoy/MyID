import React, { useState } from "react";
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
import background from "../components/background";
import ProfilePic from "../components/ProfilePic";
const ConfigScreen = () => {
  const [name, setName] = useState();

  const save = async () => {
    try {
      await AsyncStorage.setItem("MyName", name);
      setName("");
    } catch (error) {
      Alert.alert(error);
    } finally {
      Keyboard.dismiss();
    }
  };

  const remove = async () => {
    try {
      await AsyncStorage.removeItem("MyName");
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
        <TouchableOpacity style={styles.btn} onPress={() => save()}>
          <Text style={styles.btntext}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => remove()}>
          <Text style={styles.btntext}>Remove</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footertext}>
            Designed and developed by Colin B. Chin Choy
          </Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default ConfigScreen;
