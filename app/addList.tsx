import { StyleSheet, View } from 'react-native';
import AddListModal from '../src/screens/AddListModal';

export default function AddList () {
  return (
    <View style={styles.container}>
      <AddListModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});