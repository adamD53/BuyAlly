import { StyleSheet, View } from "react-native";
import RegisterScreen from "../../src/screens/RegisterScreen";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <RegisterScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
