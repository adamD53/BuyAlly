import { StyleSheet, View } from 'react-native';
import AddProductModal from "../src/screens/AddProductModal"

export default function AddList () {
  return (
    <View style={styles.container}>
      <AddProductModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});