import { View, StyleSheet } from "react-native";
import { ListsHeader } from "../components/organisms/ListsHeader";
import { ListsContent } from "../components/organisms/ListsContent";
import { ListsFooter } from "../components/organisms/ListsFooter";

export default function ListsScreen () {
  return (
    <View style={styles.container}>
      <ListsHeader />
      <ListsContent />
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
