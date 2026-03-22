import { View, StyleSheet, Text, Pressable } from "react-native";
import HeaderText from "../atoms/HeaderText";
import { FormButton } from "../atoms/FormButton";
import FormInput from "../atoms/FormInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useState } from "react";
import { router } from "expo-router";
import { authErrorMessages, IAuthErrorMessages } from "@/src/data/authErrorMessages";
import { FirebaseError } from "firebase/app";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [registerError, setRegisterError] = useState<keyof IAuthErrorMessages>();

  const signUp = async () => {
    try {
      if (repeatPassword !== password) {
        throw new FirebaseError(
          "auth/wrong-repeated-password",
          "Error: (auth/wrong-repeated-password)",
        );
      }
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log(`${user.email} is logged.`);
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        setRegisterError(err.code as keyof IAuthErrorMessages);
      }
      console.error(`Error: ${err} `);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderText style={styles.text} title="Create a New Account"></HeaderText>
      <FormInput
        placeholder="Enter your e-mail"
        value={email}
        onChangeText={setEmail}
        textContentType="emailAddress"
      />
      <FormInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        textContentType="password"
        secureTextEntry={true}
      />
      <FormInput
        placeholder="Repeat password"
        textContentType="password"
        secureTextEntry={true}
        value={repeatPassword}
        onChangeText={setRepeatPassword}
      />
      <FormButton title="Register" onPress={signUp} appearance="light" />
      <Pressable onPress={() => router.replace("(auth)/signIn")}>
        <Text style={{ ...styles.routeText, ...styles.text }}>
          Already a member? <Text style={{ ...styles.routeText, color: "#f9f9f9" }}>Sign in</Text>
        </Text>
      </Pressable>
      {registerError && (
        <Text style={styles.errorText}>Failed to register. {authErrorMessages[registerError]}</Text>
      )}
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
  errorText: {
    margin: 20,
    color: "#c90000",
    fontSize: 16,
    textAlign: "center",
  },
});
