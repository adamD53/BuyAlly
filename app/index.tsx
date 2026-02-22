import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ListsScreen from "../src/screens/ListsScreen";
import LoginScreen from "../src/screens/LoginScreen";

const isUserLogged = false;

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isUserLogged ? <ListsScreen /> : <LoginScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
