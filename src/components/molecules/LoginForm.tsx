import { View, StyleSheet, Text, Pressable } from "react-native";
import HeaderText from "../atoms/HeaderText";
import { FormButton } from "../atoms/FormButton";
import FormInput from "../atoms/FormInput";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { router } from "expo-router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(`${user.email} is logged.`);
    } catch (err: unknown) {
      console.error(`Error: ${err} `);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderText style={styles.text} title="Sign in to Your Account"></HeaderText>
      <FormInput placeholder="Enter your e-mail" value={email} onChangeText={setEmail} textContentType="emailAddress" />
      <FormInput placeholder="Enter your password" value={password} onChangeText={setPassword} textContentType="password" secureTextEntry={true} />
      <Pressable>
        <Text style={styles.routeText}>Forgot your password?</Text>
      </Pressable>
      <FormButton title="Login" onPress={signIn} appearance="light" />
      <Pressable onPress={() => router.replace("(auth)/signUp")}>
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
