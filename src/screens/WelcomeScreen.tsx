import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FormButton } from "../components/atoms/FormButton";
import { router } from "expo-router";

const SafeView = ({ children }: { children?: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  return <View style={[styles.safeArea, { paddingBottom: insets.bottom, paddingTop: insets.top }]}>{children}</View>;
};

export default function WelcomeScreen() {
  return (
    <SafeView>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.appTitle}>Welcome to BuyAlly</Text>
          <Text style={styles.appSubtitle}>The Right Way to Make Your Shopping Easier</Text>
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.actionsRow}>
            <FormButton title="Sign in" appearance="dark" onPress={() => router.replace("(auth)/signIn")} />
            <FormButton title="Sign up" appearance="dark" onPress={() => router.replace("(auth)/signUp")} />
          </View>
        </View>
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#273449",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 28,
  },
  topSection: {
    alignItems: "center",
    paddingTop: 32,
  },
  appTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  appSubtitle: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 12,
  },
  bottomSection: {
    alignItems: "center",
  },
  actionsRow: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 14,
    padding: 4,
  },
});
