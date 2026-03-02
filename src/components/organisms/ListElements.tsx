import { View, StyleSheet, FlatList, Text } from "react-native";
import { ListItem } from "../molecules/ListItem";
import { useList } from "@/src/store/storeList";
import { auth } from "@/firebaseConfig";
import { useEffect } from "react";

export function ListElements() {
  const { fetchLists, lists, cleanLists } = useList();
  const currentUserList = lists.filter((list) => list.ownerID === auth.currentUser?.uid);

  console.log("useEffect fetchlists called");
  useEffect(() => {
    fetchLists();
    return () => {
      console.log("lists cleared");
      cleanLists();
    };
  }, [fetchLists, cleanLists]);

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
