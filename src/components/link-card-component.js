import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../utils/styles";
import ShareQRCode from "../screens/ShareQRCode";

const LinkCardComponent = ({ logo, link }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.infocard}>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Image source={logo} style={styles.imagebutton} />
      </TouchableOpacity>
      <ShareQRCode showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
};
export default LinkCardComponent;
