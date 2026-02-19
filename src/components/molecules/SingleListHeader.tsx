import { Text, View, StyleSheet } from "react-native";
import { TextButton } from "../atoms/TextButton";
import { router } from "expo-router";

export function SingleListHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>List title</Text>
      <TextButton onPress={() => router.navigate("/addProduct")} title="Add product" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 30
  },

  headerText: {
    color: "#111111",
    fontSize: 30,
    fontWeight: "bold",
  },
})
