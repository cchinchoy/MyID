import AsyncStorage from "@react-native-async-storage/async-storage";
import { Brands } from "../components/brandlogos";
const df = {
  name: "Default",
  summary: "A Summary of what you want people to know or see!!!",
  brandItems: [
    { brandUrl: "www.facebook.com", logo: Brands.facebook, selected: true },
    { brandUrl: "www.tiktok.com", logo: Brands.tiktok, selected: false },
    { brandUrl: "www.linkedin.com", logo: Brands.linkedin, selected: true },
    { brandUrl: "www.twitter.com", logo: Brands.twitter, selected: false },
    { brandUrl: "www.youtube.com", logo: Brands.youtube, selected: true },
    { brandUrl: "www.whatsapp.com", logo: Brands.whatsapp, selected: false },
    { brandUrl: "www.google.com", logo: Brands.blank, selected: true },
  ],
  backgroundImages: [],
};
export const Defaults = async () => {
  try {
    await AsyncStorage.setItem("@MyId", JSON.stringify(df));
    console.log("data saved");
  } catch (error) {
    alert(error);
    console.log("data save error");
  }
};
