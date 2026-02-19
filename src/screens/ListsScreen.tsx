import { View, StyleSheet } from "react-native";
import { ListsHeader } from "../components/molecules/ListsHeader";
import { ListElements } from "../components/organisms/ListElements";
import { ListsFooter } from "../components/organisms/ListsFooter";

export default function ListsScreen() {
  return (
    <View style={styles.container}>
      <ListsHeader />
      <ListElements />
      <ListsFooter />
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
