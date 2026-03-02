import { View, StyleSheet, FlatList, Text } from "react-native";
import { ListItem } from "../molecules/ListItem";
import { useList } from "@/src/store/storeList";
import { auth } from "@/firebaseConfig";
import { useEffect } from "react";
import { useProduct } from "@/src/store/storeProduct";

export function ListElements() {
  const { fetchLists, lists, cleanLists } = useList();
  const currentUserList = lists.filter((list) => list.ownerID === auth.currentUser?.uid);
  const { fetchProducts, cleanProducts } = useProduct();

  useEffect(() => {
    fetchLists();
    console.log("useEffect fetched lists");
    fetchProducts();
    console.log("useEffect fetched products");
    return () => {
      cleanProducts();
      cleanLists();
      console.log("lists cleared");
      console.log("products cleared");
    };
  }, [fetchLists, cleanLists, fetchProducts, cleanProducts]);

  return (
    <View style={styles.container}>
      {currentUserList.length == 0 && <Text style={styles.text}>No lists</Text>}
      <FlatList
        data={currentUserList}
        renderItem={({ item }) => <ListItem title={item.title} color={item.color} icon={item.icon} id={item.id} />}
        keyExtractor={(item) => item.id}
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
