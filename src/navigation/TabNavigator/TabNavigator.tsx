import AboutScreen from "@/src/screens/about/AboutScreen";
import AddProductScreen from "@/src/screens/add/AddProductScreen";
import HomeProductScreen from "@/src/screens/home/HomeProductScreen";
import SearchProductScreen from "@/src/screens/search/SearchProductScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Tab } from "../helpers";

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#007AFF', // Color when tab is choosen
                    tabBarInactiveTintColor: '#8E8E93', // If not choosen
                    tabBarStyle: {
                        backgroundColor: '#FFFFFF', // Background color
                        borderTopColor: '#E5E5EA', // Border color
                        height: 60, // Height
                    },
                    animation: 'shift',
                }}
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