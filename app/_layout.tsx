import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="addList" options={{ presentation: "modal" }} />
        <Stack.Screen
          name="lists/[id]"
          options={{
            headerShown: true,
            headerBackVisible: true,
            headerTitle: "",
            headerBackTitle: "Back"
          }}
        />
        <Stack.Screen name="lists/addProduct" options={{ presentation: "modal" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
