import { View, StyleSheet } from "react-native";
import { ModalHeader } from "../components/molecules/ModalHeader";
import { Input } from "../components/molecules/Input";
import { useProduct } from "../store/storeProduct";
import { router } from "expo-router";
import { useList } from "../store/storeList";
import { useLocalSearchParams } from "expo-router";

export default function AddProductModal() {
  const { input, quantity, note, setInput, setQuantity, setNote, addProduct, resetState } =
    useProduct();
  const { addProductToList } = useList();
  const { listId } = useLocalSearchParams();

  const handleAddProduct = () => {
    const newProductID = addProduct();
    addProductToList(listId, newProductID);
    resetState();
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ModalHeader onSubmit={handleAddProduct} title="Add product" fontColor="white" />
        <Input
          placeholder="New product"
          value={input}
          onChange={(text) => setInput(text)}
          color="white"
        />
      </View>
      <Input placeholder="Quantity" value={quantity} onChange={(text) => setQuantity(text)} />
      <Input placeholder="Note" value={note} onChange={(text) => setNote(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    gap: 30,
  },

  headerContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: "#5856d6",
  },
});
