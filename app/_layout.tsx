import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, useSegments, router } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebaseConfig";

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
      console.log("we are there");
      router.replace("(auth)/welcome");
    } else if (user && inAuthGroup) {
      console.log("we are here");
      router.navigate("/");
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
    </SafeAreaProvider>
  );
}
