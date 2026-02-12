import { View, Text, StyleSheet } from "react-native";

export function ListsContent () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No lists</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center"
  },

  text: {
    color: "grey",
    fontSize: 18,
    fontWeight: 600
  }
})