import { Text, View, StyleSheet } from "react-native";
import { TextButton } from "../atoms/TextButton";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useList } from "@/src/store/storeList";

export function SingleListHeader() {
  const { id } = useLocalSearchParams();
  const cleanID = id.toString().slice(1, -1);
  const title = useList((state) => state.lists.find((list) => list.id == cleanID)?.title);

  const handlePushToModal = () => {
    router.push({
      pathname: "lists/addProduct",
      params: { listId: cleanID },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
      <TextButton onPress={handlePushToModal} title="Add product" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },

  headerText: {
    color: "#111111",
    fontSize: 30,
    fontWeight: "bold",
  },
});
