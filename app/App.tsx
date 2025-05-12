import TabNavigator from '@/src/navigation/TabNavigator/TabNavigator';
import { NavigationIndependentTree } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationIndependentTree>
                <TabNavigator />
            </NavigationIndependentTree>
        </SafeAreaProvider>
    )
}