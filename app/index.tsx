import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ListsScreen from '../src/screens/ListsScreen'

export default function MainScreen () {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ListsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});