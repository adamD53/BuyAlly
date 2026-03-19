import { View, StyleSheet, Button } from "react-native";
import ListsHeader from "../components/molecules/ListsHeader";
import ListElements from "../components/organisms/ListElements";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export default function ListsScreen() {
  return (
    <View style={styles.container}>
      <ListsHeader />
      <ListElements />
      <Button onPress={() => signOut(auth)} title="LogOut" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
    gap: 20,
    width: "100%",
  },
});
