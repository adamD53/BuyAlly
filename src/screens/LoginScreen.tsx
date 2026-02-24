import { View, StyleSheet, ImageBackground, Text } from "react-native";
import backgroundImage from "../../assets/login_background.png";
// import LoginForm from "../components/molecules/LoginForm";
import { auth } from "../../firebaseConfig";
import RegisterForm from "../components/molecules/RegisterForm";
import LoginForm from "../components/molecules/LoginForm";

export default function LoginScreen() {
  const user = auth.currentUser;

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.overlay} />
        <LoginForm />
        {user && <Text>Welcome {user.displayName}</Text>}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.60)",
  },
});
