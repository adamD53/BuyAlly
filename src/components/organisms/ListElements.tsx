import { View, StyleSheet, Text, TouchableOpacity, ListRenderItemInfo } from "react-native";
import { ListItem } from "../molecules/ListItem";
import { useList, IListData } from "@/src/store/storeList";
import { auth } from "@/firebaseConfig";
import { useEffect } from "react";
import { useProduct } from "@/src/store/storeProduct";
import { Feather } from "@expo/vector-icons";
import { RowMap, SwipeListView } from "react-native-swipe-list-view";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";

export default function ListElements() {
  const { fetchLists, lists, cleanLists, deleteList, removeOwnerFromList } = useList();
  const { fetchProducts, cleanProducts, deleteProducts } = useProduct();
  const currentUserList = lists.filter(
    (list) => auth.currentUser?.uid && list.ownersIDs.includes(auth.currentUser.uid),
  );

  useEffect(() => {
    fetchLists();
    fetchProducts();
    return () => {
      cleanProducts();
      cleanLists();
    };
  }, [fetchLists, cleanLists, fetchProducts, cleanProducts]);

  const handleDeleteListItem = (
    rowMap: RowMap<IListData>,
    rowData: ListRenderItemInfo<IListData>,
  ) => {
    removeOwnerFromList(rowData.item.id);
    deleteProducts(rowData.item.id);
    deleteList(rowData.item.id);
    rowMap[rowData.item.id].closeRow();
  };

  const handleShareListItem = async (
    rowMap: RowMap<IListData>,
    rowData: ListRenderItemInfo<IListData>,
  ) => {
    await Clipboard.setStringAsync(rowData.item.id);
    rowMap[rowData.item.id].closeRow();
    Toast.show({
      type: "success",
      text1: `List id ${rowData.item.id} copied to clipboard.`,
      text1Style: { fontStyle: "normal" },
    });
  };

  return (
    <View style={styles.container}>
      {currentUserList.length == 0 && <Text style={styles.text}>No lists</Text>}
      <SwipeListView
        data={currentUserList}
        renderItem={({ item }) => (
          <ListItem title={item.title} color={item.color} icon={item.icon} id={item.id} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderHiddenItem={(rowData, rowMap) => (
          <View style={styles.hiddenRow}>
            <View style={styles.actionsRow}>
              <TouchableOpacity
                onPress={() => handleShareListItem(rowMap, rowData)}
                style={[styles.optionIconContainer, styles.shareAction]}
              >
                <Feather name="share" size={22} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteListItem(rowMap, rowData)}
                style={[styles.optionIconContainer, styles.deleteAction]}
              >
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
    gap: 5,
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
