import { View, StyleSheet } from "react-native";
import { ModalHeader } from "../components/molecules/ModalHeader";
import { Input } from "../components/molecules/Input";
import { AddListMenu } from "../components/molecules/AddListMenu";
import { useList } from "../store/storeList";
import { router } from "expo-router";

export default function AddListModal() {
  const { setInput, addList, postList, resetState, input } = useList();

  const handleAddList = () => {
    const id = addList();
    postList(id);
    resetState();
    router.back();
  };

  return (
    <View style={styles.container}>
      <ModalHeader onSubmit={handleAddList} title="Add list" />
      <Input placeholder="New list" onChange={(text) => setInput(text)} value={input} />
      <AddListMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    gap: 20,
  },
});
