import { StyleSheet, Text, Pressable, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useProduct } from "@/src/store/storeProduct";

interface IProductProps {
  productId: string
}

export function Product({ productId }: IProductProps) {
  const isChecked = useProduct(({ products }) =>
    products.find((prod) => prod.id === productId)?.product.checked
  );
  const toggleProduct = useProduct((state) => state.toggleProduct);
  const title = useProduct((state) => state.products.find((prod) => prod.id === productId)?.product.title);
  const quantity = useProduct((state) => state.products.find((prod) => prod.id === productId)?.product.quantity);

  return (
    <Pressable style={styles.container} onPress={() => toggleProduct(productId)}>
      <View style={styles.checkIcon}>
        <Octicons name={isChecked ? "check-circle-fill" : "check-circle"} size={24} color="#5856d6" />
      </View>
      <Text style={{ ...styles.titleText, textDecorationLine: (isChecked ? "line-through" : "none") }}>{title}</Text>
      <Text style={styles.quantityText}>{quantity}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  titleText: {
    fontSize: 17,
    flex: 1,
  },

  quantityText: {
    fontSize: 17,
  },

  checkIcon: {
    width: 45,
  }
})