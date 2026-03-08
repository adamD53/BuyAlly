import { View, StyleSheet, FlatList, Text } from "react-native";
import { Product } from "../molecules/Product";
import { useList } from "@/src/store/storeList";
import { useLocalSearchParams } from "expo-router";

export default function ProductList() {
  const { id } = useLocalSearchParams();
  const cleanID = id.toString().slice(1, -1);
  const productsData = useList(
    (state) => state.lists.find((list) => list.id === cleanID)?.productIDs,
  );

  return (
    <View style={styles.container}>
      {productsData?.length == 0 && <Text style={styles.text}>No products</Text>}
      <FlatList
        data={productsData}
        renderItem={({ item }) => <Product productID={item} />}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    alignItems: "center",
  },

  list: {
    gap: 15,
    alignItems: "center",
  },

  text: {
    color: "grey",
    fontSize: 18,
    fontWeight: 600,
  },
});
