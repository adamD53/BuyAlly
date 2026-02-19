import { View, StyleSheet } from "react-native";
import { ModalHeader } from "../components/molecules/ModalHeader";
import { Input } from "../components/molecules/Input";
import { AddListMenu } from "../components/molecules/AddListMenu";
import { useList } from "../store/storeList";
import { useRouter } from "expo-router";

export default function AddListModal() {
  const input = useList((state) => state.input);
  const setInput = useList((state) => state.setInput);
  const addList = useList((state) => state.addList);
  const resetState = useList((state) => state.resetState);
  const router = useRouter();

  const handleAddTask = () => {
    addList();
    resetState();
    router.back();
  }

  return (
    <View style={styles.container}>
      <ModalHeader onSubmit={handleAddTask} title="Add list" />
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
  }
})
