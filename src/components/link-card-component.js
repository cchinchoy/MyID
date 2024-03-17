import { View, Text } from "react-native";
import styles from "../utils/styles";
const LinkCardComponent = () => {
  return (
    <View style={styles.infocard}>
      <Text style={styles.infolabel}>Button</Text>
      <View style={styles.spacer} />
    </View>
  );
};
export default LinkCardComponent;
