import { View, StyleSheet, ImageBackground } from "react-native";
import backgroundImage from "../../assets/login_background.png";
import LoginForm from "../components/molecules/LoginForm";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.overlay} />
        <LoginForm />
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
