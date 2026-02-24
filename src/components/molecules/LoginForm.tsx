import { View, StyleSheet, Text, Pressable } from "react-native";
import HeaderText from "../atoms/HeaderText";
import { FormButton } from "../atoms/FormButton";
import FormInput from "../atoms/FormInput";

export default function LoginForm() {
  return (
    <View style={styles.container}>
      <HeaderText style={styles.text} title="Sign in to Your Account"></HeaderText>
      <FormInput placeholder="Enter your e-mail" />
      <FormInput placeholder="Enter your password" />
      <Pressable>
        <Text style={styles.routeText}>Forgot your password?</Text>
      </Pressable>
      <FormButton title="Login" onPress={() => console.log("pressed login")} />
      <Pressable>
        <Text style={{ ...styles.routeText, ...styles.text }}>
          Not yet a member? <Text style={{ ...styles.routeText, color: "#f9f9f9" }}>Sign up</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 350,
    textAlign: "left",
  },
  text: {
    textAlign: "center",
  },
  routeText: {
    color: "#999fa2",
    fontSize: 16,
  },
});
