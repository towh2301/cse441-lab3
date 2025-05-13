import TabNavigator from "@/src/navigation/TabNavigator/TabNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Khởi tạo QueryClient một lần duy nhất (tránh tái tạo trong mỗi render)
const queryClient = new QueryClient();

export default function App() {
  return (
    
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <TabNavigator />
        </QueryClientProvider>
      </SafeAreaProvider>
    
  );
}