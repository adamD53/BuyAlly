import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, useSegments, router } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Toast, { BaseToastProps, BaseToast } from "react-native-toast-message";

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      contentContainerStyle={{ paddingVertical: 15 }}
      text1Style={{
        fontSize: 13,
        fontWeight: "400",
      }}
    />
  ),
};

export default function RootLayout() {
  const [user, setUser] = useState<null | User>(null);
  const [initializing, setInitializing] = useState(true);
  const segments = useSegments();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (initializing) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("(auth)/welcome");
    } else if (user && inAuthGroup) {
      router.replace("/");
    }
  }, [user, initializing, segments]);

  if (initializing) return null;

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
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen name="lists/addProduct" options={{ presentation: "modal" }} />
        <Stack.Screen name="(auth)/signIn" />
        <Stack.Screen name="(auth)/signUp" />
        <Stack.Screen name="(auth)/welcome" />
      </Stack>
      <Toast config={toastConfig} topOffset={70} />
    </SafeAreaProvider>
  );
}
