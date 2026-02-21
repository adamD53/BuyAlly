import { StyleSheet, View, Text } from 'react-native';
import SingleListScreen from '../../src/screens/SingleListScreen';
import { useLocalSearchParams } from 'expo-router';

export default function AddList () {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <SingleListScreen />
      <Text>List of id {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});