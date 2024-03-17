import { useState } from "react";
import { Image, View } from "react-native";
import styles from "../utils/styles";
const ProfilePic = () => {
  const [pic, setPic] = useState();
  const image = "";

  return (
    <View style={styles.profileimage}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.profilepic}
      />
    </View>
  );
};
export default ProfilePic;
