import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ListScreen from './src/screens/ListsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ListScreen />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
