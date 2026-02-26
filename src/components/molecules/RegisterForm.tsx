import { View, StyleSheet, Text, Pressable } from "react-native";
import HeaderText from "../atoms/HeaderText";
import { FormButton } from "../atoms/FormButton";
import FormInput from "../atoms/FormInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useState } from "react";
import { router } from "expo-router";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log(`${user.email} is logged.`);
    } catch (err: unknown) {
      console.error(`Error: ${err} `);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderText style={styles.text} title="Create a New Account"></HeaderText>
      <FormInput placeholder="Enter your e-mail" value={email} onChangeText={setEmail} />
      <FormInput placeholder="Enter your password" value={password} onChangeText={setPassword} />
      <FormInput placeholder="Repeat password" />
      <FormButton title="Register" onPress={signUp} appearance="light" />
      <Pressable onPress={() => router.replace("(auth)/signIn")}>
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
