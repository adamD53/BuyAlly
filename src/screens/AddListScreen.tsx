import { View, StyleSheet } from "react-native";
import { AddListHeader } from "../components/organisms/AddListHeader";

export default function AddListScreen () {
  return (
    <View style={styles.container}>
      <AddListHeader />
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
