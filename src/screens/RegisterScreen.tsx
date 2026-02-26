import { View, StyleSheet, ImageBackground } from "react-native";
import backgroundImage from "../../assets/login_background.png";
import RegisterForm from "../components/molecules/RegisterForm";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.overlay} />
        <RegisterForm />
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
