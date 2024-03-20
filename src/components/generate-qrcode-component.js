import { useState } from "react";
import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
const GenerateQRCode = () => {
  const [qrvalue, setQrvalue] = useState("https://colinchinchoy.info/");
  return (
    <View>
      <QRCode
        value={qrvalue ? qrvalue : "NA"} //QR code value
        size={250} //size of QR Code
        color="black" //Color of the QR Code (Optional)
        backgroundColor="white" //Background Color of the QR Code (Optional)
        logo={{
          url: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png",
        }} //Logo of in the center of QR Code (Optional)
        logoSize={30} //Center Logo size  (Optional)
        logoMargin={2} //Center Logo margin (Optional)
        logoBorderRadius={15} //Center Logo radius (Optional)
        logoBackgroundColor="yellow" //Center Logo background (Optional)
      />
      {/* <Text style={styles.textStyle}>
        Please insert any value to generate QR code
      </Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(inputText) => setInputText(inputText)}
        placeholder="Enter Any Value"
        value={inputText}
      /> */}
    </View>
  );
};
export default GenerateQRCode;
