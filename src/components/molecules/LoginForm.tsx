import { View, StyleSheet } from "react-native";
import HeaderText from "../atoms/HeaderText";
import { LoginButton } from "../atoms/LoginButton";

export default function LoginForm() {
  return (
    <View style={styles.container}>
      <HeaderText style={styles.text} title="Sign in to your account"></HeaderText>
      <LoginButton title="Google" onPress={() => console.log("pressed")} iconName="google" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 350,
  },
  text: {
    textAlign: "center",
  },
});
