import { View, StyleSheet, Text } from "react-native";
import { SingleListHeader } from "../components/molecules/SingleListHeader";

export default function SingleListScreen() {
  return (
    <View style={styles.container}>
      <SingleListHeader />
      <Text>Empty list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
    gap: 20,
    width: "100%"
  }
})
