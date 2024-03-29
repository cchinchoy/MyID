import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../utils/styles";

export const NewName = () => {
  const [name, setName] = useState();

  const save = async () => {
    try {
      let currentData = await AsyncStorage.getItem("@MyId");
      let cdata = JSON.parse(currentData);
      cdata.name = name;
      await AsyncStorage.setItem("@MyId", JSON.stringify(cdata));
      setName("");
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
    <View>
      <View style={styles.rowcontainer}>
        <TextInput
          value={name}
          style={styles.input}
          placeholder="Enter your Name"
          onChangeText={(text) => setName(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={() => save()}>
          <Text style={styles.btntext}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
