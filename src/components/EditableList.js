import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList } from "react-native";
import { CheckBox } from "@react-native-community/checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../utils/styles";

const EditableList = () => {
  const [data, setData] = useState({
    name: "",
    summary: "",
    brandItems: [],
    backgroundImages: [],
  });

  // Load data from AsyncStorage
  useEffect(() => {
    const loadData = async () => {
      const storedData = await AsyncStorage.getItem("@MyId");
      if (storedData) setData(JSON.parse(storedData));
    };

    loadData();
  }, []);

  // Save data to AsyncStorage
  const saveData = async (newData) => {
    await AsyncStorage.setItem("@MyId", JSON.stringify(newData));
    setData(newData);
  };

  // Handle the addition of a new brand item
  const handleAddBrandItem = () => {
    const newBrandItem = { brandUrl: "", logo: "", selected: false };
    const newData = { ...data, brandItems: [...data.brandItems, newBrandItem] };
    saveData(newData);
  };

  // Handle the deletion of a brand item
  const handleDeleteBrandItem = (index) => {
    const newData = { ...data };
    newData.brandItems.splice(index, 1);
    saveData(newData);
  };

  // Handle the editing of a brand item
  const handleEditBrandItem = (index, field, value) => {
    const newData = { ...data };
    newData.brandItems[index][field] = value;
    saveData(newData);
  };

  // Toggle the selection of a brand item
  const toggleBrandItemSelection = (index) => {
    const newData = { ...data };
    newData.brandItems[index].selected = !newData.brandItems[index].selected;
    saveData(newData);
  };

  return (
    <View>
      <Button title="Add Brand Item" onPress={handleAddBrandItem} />
      <FlatList
        data={data.brandItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.editlititemcontainer}>
            <TextInput
              style={styles.input}
              onChangeText={(text) =>
                handleEditBrandItem(index, "brandUrl", text)
              }
              value={item.brandUrl}
              placeholder="Brand URL"
            />
            <TextInput
              style={styles.editlistinput}
              onChangeText={(text) => handleEditBrandItem(index, "logo", text)}
              value={item.logo}
              placeholder="Logo"
            />
            <CheckBox
              value={item.selected}
              onValueChange={() => toggleBrandItemSelection(index)}
            />
            <Button
              title="Delete"
              onPress={() => handleDeleteBrandItem(index)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default EditableList;
