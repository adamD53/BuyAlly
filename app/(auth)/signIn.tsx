import { StyleSheet, View } from "react-native";
import LoginScreen from "../../src/screens/LoginScreen";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
