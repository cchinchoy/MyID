import { useState } from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
const GenerateQRCode = ({ link }) => {
  const [qrvalue, setQrvalue] = useState(link);
  return (
    <View>
      <QRCode
        value={qrvalue ? qrvalue : "NA"} //QR code value
        size={250} //size of QR Code
        color="blue" //Color of the QR Code (Optional)
        backgroundColor="white" //Background Color of the QR Code (Optional)
        logo={{
          url: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png",
        }} //Logo of in the center of QR Code (Optional)
        logoSize={30} //Center Logo size  (Optional)
        logoMargin={2} //Center Logo margin (Optional)
        logoBorderRadius={15} //Center Logo radius (Optional)
        logoBackgroundColor="yellow" //Center Logo background (Optional)
      />
    </View>
  );
};
export default GenerateQRCode;
