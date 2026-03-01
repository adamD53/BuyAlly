import { View, StyleSheet } from "react-native";
import { ModalHeader } from "../components/molecules/ModalHeader";
import { Input } from "../components/molecules/Input";
import { AddListMenu } from "../components/molecules/AddListMenu";
import { useList } from "../store/storeList";
import { router } from "expo-router";
import { db } from "@/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default function AddListModal() {
  const input = useList((state) => state.input);
  const setInput = useList((state) => state.setInput);
  const addList = useList((state) => state.addList);
  const fetchList = useList((state) => state.fetchList);
  const resetListState = useList((state) => state.resetState);

  const handleAddList = () => {
    const id = addList();
    fetchList(id);
    resetListState();
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
