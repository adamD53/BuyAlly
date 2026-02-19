import { View, StyleSheet } from "react-native";
import { ModalHeader } from "../components/molecules/ModalHeader";
import { Input } from "../components/molecules/Input";
import { useProduct } from "../store/storeProduct";
import { router } from "expo-router";

export default function AddProductModal() {
  const input = useProduct((state) => state.input);
  const quantity = useProduct((state) => state.quantity);
  const note = useProduct((state) => state.note);
  const setInput = useProduct((state) => state.setInput);
  const setQuantity = useProduct((state) => state.setQuantity);
  const setNote = useProduct((state) => state.setNote);
  const addProduct = useProduct((state) => state.addProduct);
  const resetProductState = useProduct((state) => state.resetState)

  const handleAddProduct = () => {
    addProduct();
    resetProductState(); 
    router.back();
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ModalHeader onSubmit={handleAddProduct} title="Add product" fontColor="white" />
        <Input placeholder="New product" value={input} onChange={(text) => setInput(text)} color="white" />
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
  }
})
