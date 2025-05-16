// src/navigation/HomeStackNavigator.tsx
import HomeProductScreen from "@/src/screens/home/HomeProductScreen";
import ProductDetails from "@/src/screens/product/ProductDetails"; // Adjust path as needed
import SearchProductScreen from "@/src/screens/search/SearchProductScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

const HomeStack = createStackNavigator<RootStackParamList>();

export default function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeProductScreen"
                component={HomeProductScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{
                    headerShown: false
                }}
            />
            <HomeStack.Screen
                name="SearchProductScreen"
                component={SearchProductScreen}
                options={{
                    headerShown: false
                }}
            />
        </HomeStack.Navigator>
    );
}