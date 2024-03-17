import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../src/screens/HomeScreen";
import ConfigScreen from "./screens/ConfigScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export default function App() {
  let name = "Colin Chin Choy";
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={name != null ? "Home" : "Config"}
        labeled={false}
        barStyle={{
          backgroundColor: "transparent",
          position: "absolute",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Config") {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Config" component={ConfigScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
