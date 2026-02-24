import { View, StyleSheet, Text, Pressable } from "react-native";
import HeaderText from "../atoms/HeaderText";
import { FormButton } from "../atoms/FormButton";
import FormInput from "../atoms/FormInput";

export default function RegisterForm() {
  return (
    <View style={styles.container}>
      <HeaderText style={styles.text} title="Create a New Account"></HeaderText>
      <FormInput placeholder="Enter your e-mail" />
      <FormInput placeholder="Enter your password" />
      <FormInput placeholder="Repeat password" />
      <FormButton title="Register" onPress={() => console.log("Register pressed")} />
      <Pressable>
        <Text style={{ ...styles.routeText, ...styles.text }}>
          Already a member? <Text style={{ ...styles.routeText, color: "#f9f9f9" }}>Sign in</Text>
        </Text>
      </Pressable>
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
  routeText: {
    color: "#999fa2",
    fontSize: 16,
  },
});
