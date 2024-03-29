import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../src/screens/HomeScreen";
import ConfigScreen from "./screens/ConfigScreen";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  // to load the initialRoute needed based on name in asyncstorage
  useEffect(() => {
    const getRoute = async () => {
      try {
        let stored = await AsyncStorage.getItem("@MyId");
        console.log(stored);
        let routeName = stored ? "Home" : "Config";
        setInitialRoute(routeName);
      } catch (error) {
        alert(err);
        setInitialRoute("Config");
      }
    };
    getRoute();
  }, []);

  if (initialRoute === null) {
    return null;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={initialRoute}
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
