// src/navigation/TabNavigator.tsx
import AboutScreen from "@/src/screens/about/AboutScreen";
import { AddProductScreen } from "@/src/screens/add/AddProductScreen";
import SearchProductScreen from "@/src/screens/search/SearchProductScreen";
import { AppTheme } from "@/src/screens/styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStackNavigator from "../HomeNavigator/HomeStackNavigator";
import { TabParamList } from "../types";

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "About") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Add") {
            iconName = focused ? "add" : "add-outline";
          } else {
            iconName = focused ? "search" : "search-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: AppTheme.colors.primary,
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E5E5EA",
          height: 70,
          paddingTop: 10,
        },
        animation: "shift",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator} // Use HomeStackNavigator
        options={{
          headerShown: false,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddProductScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Add",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchProductScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Search",
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: false,
          tabBarLabel: "About",
        }}
      />
    </Tab.Navigator>
  );
}