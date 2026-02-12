import { StyleSheet, View } from 'react-native';
import AddListScreen from '../src/screens/AddListScreen';

export default function AddList () {
  return (
    <View style={styles.container}>
      <AddListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});