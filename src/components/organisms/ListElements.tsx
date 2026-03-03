import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ListItem } from "../molecules/ListItem";
import { useList } from "@/src/store/storeList";
import { auth } from "@/firebaseConfig";
import { useEffect } from "react";
import { useProduct } from "@/src/store/storeProduct";
import { Feather } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";

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
      <SwipeListView
        data={currentUserList}
        renderItem={({ item }) => <ListItem title={item.title} color={item.color} icon={item.icon} id={item.id} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderHiddenItem={(rowData, rowMap) => (
          <View style={styles.hiddenRow}>
            <View style={styles.actionsRow}>
              <TouchableOpacity onPress={() => rowMap[rowData.item.id].closeRow()} style={[styles.optionIconContainer, styles.shareAction]}>
                <Feather name="share" size={22} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => rowMap[rowData.item.id].closeRow()} style={[styles.optionIconContainer, styles.deleteAction]}>
                <Feather name="trash" size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        rightOpenValue={-132}
        disableRightSwipe={true}
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
  },
  text: {
    color: "grey",
    fontSize: 18,
    fontWeight: 600,
  },
  hiddenRow: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  actionsRow: {
    width: 132,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  optionIconContainer: {
    width: 62,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  shareAction: {
    backgroundColor: "#2072ff",
  },
  deleteAction: {
    backgroundColor: "#e10b0b",
  },
});
