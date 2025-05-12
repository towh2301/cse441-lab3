import AboutScreen from "@/src/screens/about/AboutScreen";
import AddProductScreen from "@/src/screens/add/AddProductScreen";
import HomeProductScreen from "@/src/screens/home/HomeProductScreen";
import SearchProductScreen from "@/src/screens/search/SearchProductScreen";
import { AppTheme } from "@/src/screens/styles";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tab } from "../helpers";

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: string;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'About') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (route.name === 'Add') {
                            iconName = focused ? 'add' : 'add-outline';
                        } else {
                            iconName = focused ? 'search' : 'search-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },


                    tabBarActiveTintColor: AppTheme.colors.primary, // Color when tab is choosen
                    tabBarInactiveTintColor: '#8E8E93', // If not choosen
                    tabBarStyle: {
                        backgroundColor: '#FFFFFF', // Background color
                        borderTopColor: '#E5E5EA', // Border color
                        height: 70, // Height
                        paddingTop: 10,
                    },
                    animation: 'shift',
                })}
            >
                <Tab.Screen name="Home" component={HomeProductScreen} options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                }} />
                <Tab.Screen name="Add" component={AddProductScreen} options={{
                    headerShown: false,
                    tabBarLabel: 'Add',
                }} />
                <Tab.Screen name="Search" component={SearchProductScreen} options={{
                    headerShown: false,
                    tabBarLabel: 'Search',
                }} />
                <Tab.Screen name="About" component={AboutScreen} options={{
                    headerShown: false,
                    tabBarLabel: 'About',
                }} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}