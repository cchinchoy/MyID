import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

import LinkCardComponent from "../components/link-card-component"; // Adjust the import path as necessary

const ButtonScreen = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchData = async () => {
      const dataString = await AsyncStorage.getItem("@MyId");
      const data = JSON.parse(dataString);
      const filteredBrands = data.brandItems.filter((item) => item.selected);
      setSelectedBrands(filteredBrands);
    };
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  // Render function for each item
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <LinkCardComponent logo={item.logo} link={item.brandUrl} />
    </View>
  );

  return (
    <FlatList
      data={selectedBrands}
      renderItem={renderItem}
      // Key extractor based on brandUrl, assuming it's unique
      keyExtractor={(item) => item.brandUrl}
      // Setting numColumns to 3 for 3 items per row
      numColumns={3}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    margin: 10,
  },
});

export default ButtonScreen;
