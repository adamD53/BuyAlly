import { View, StyleSheet } from "react-native";
import { SingleListHeader } from "../components/molecules/SingleListHeader";
import { ProductList } from "../components/organisms/ProductList";

export default function SingleListScreen() {
  return (
    <View style={styles.container}>
      <SingleListHeader />
      <ProductList />
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
