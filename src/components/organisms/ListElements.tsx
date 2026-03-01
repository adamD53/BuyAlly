import { View, StyleSheet, FlatList, Text } from "react-native";
import { ListItem } from "../molecules/ListItem";
import { useList } from "@/src/store/storeList";

export function ListElements() {
  const listData = useList((state) => state.lists);

  return (
    <View style={styles.container}>
      {listData.length == 0 && <Text style={styles.text}>No lists</Text>}
      <FlatList
        data={listData}
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
