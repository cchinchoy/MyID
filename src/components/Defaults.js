import AsyncStorage from "@react-native-async-storage/async-storage";
import brands from "./brandlogos";
const df = {
  name: "Default",
  summary: "A Summary of what you want people to know or see!!!",
  brandItems: [
    { brandUrl: "www.facebook.com", logo: brands.facebook, selected: true },
    { brandUrl: "www.tiktok.com", logo: brands.tiktok, selected: false },
    { brandUrl: "www.linkedin.com", logo: brands.linkedin, selected: true },
    { brandUrl: "www.twitter.com", logo: brands.twitter, selected: false },
    { brandUrl: "www.youtube.com", logo: brands.youtube, selected: true },
    { brandUrl: "www.whatsapp.com", logo: brands.whatsapp, selected: false },
    { brandUrl: "www.google.com", logo: brands.blank, selected: true },
  ],
  backgroundImages: [],
};
const Defaults = async () => {
  try {
    await AsyncStorage.setItem("@MyId", JSON.stringify(df));
    console.log("data saved");
  } catch (error) {
    alert(error);
    console.log("data save error");
  }
};
export default Defaults;
