import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import styles from "../utils/styles";
import {
  Background,
  ProfilePic,
  Footer,
  NewName,
  Defaults,
} from "../components";
import EditableList from "../components/EditableList";

const ConfigScreen = () => {
  const isFocused = useIsFocused();
  useEffect(() => {
    const loadData = async () => {
      const storedData = await AsyncStorage.getItem("@MyId");
      console.log(storedData);
      if (storedData === null) {
        Defaults();
      }
    };
    loadData();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >
        <ProfilePic />
        <View style={styles.edittitlecontainer}>
          <NewName />
        </View>

        <EditableList />

        <Footer />
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default ConfigScreen;
