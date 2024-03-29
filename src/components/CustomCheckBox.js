import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../utils/styles";
export const CustomCheckBox = ({ selected, onPress }) => {
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={
          selected ? styles.custcheckboxslcted : styles.custcheckboxunslcted
        }
      />
    </View>
  );
};
