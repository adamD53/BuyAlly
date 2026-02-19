import { StyleSheet, View, Text } from 'react-native';
import SingleListScreen from '../src/screens/SingleListScreen';

export default function AddList () {
  return (
    <View style={styles.container}>
      <SingleListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});