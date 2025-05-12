import TabNavigator from '@/src/navigation/TabNavigator/TabNavigator';
import { NavigationIndependentTree } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
    return (
        <SafeAreaProvider>
          <QueryClientProvider client={new QueryClient}>
            <NavigationIndependentTree>
                <TabNavigator />
            </NavigationIndependentTree>
          </QueryClientProvider>
        </SafeAreaProvider>
    )
}