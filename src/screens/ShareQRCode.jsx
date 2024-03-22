import { useEffect } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import styles from "../utils/styles";
import GenerateQRCode from "../components/generate-qrcode-component";
const ShareQRCode = ({ showModal, setShowModal, hyperLink }) => {
  useEffect(() => {}, [showModal]);
  return (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <Pressable style={styles.modalcenter} onPress={() => setShowModal(false)}>
        <View style={styles.modalview}>
          <GenerateQRCode link={hyperLink} />
        </View>
      </Pressable>
    </Modal>
  );
};
export default ShareQRCode;
