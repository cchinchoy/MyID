import { useState, useEffect } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import styles from "../utils/styles";
import { GenerateQRCode } from "../components";
const ShareQRCode = ({ showModal, setShowModal }) => {
  useEffect(() => {}, [showModal]);
  return (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <Pressable style={styles.modalcenter} onPress={() => setShowModal(false)}>
        <View style={styles.modalview}>
          <GenerateQRCode />
        </View>
      </Pressable>
    </Modal>
  );
};
export default ShareQRCode;
