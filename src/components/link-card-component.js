import { View, Text, Image } from "react-native";
import styles from "../utils/styles";

import { brands } from "../components";
const LinkCardComponent = ({ name, logo, link }) => {
  return (
    <View style={styles.infocard}>
      <Text style={styles.infolabel}>Button</Text>
      <Image source={brands.youtube} style={styles.imagebutton} />
      <View style={styles.spacer} />
    </View>
  );
};
export default LinkCardComponent;
