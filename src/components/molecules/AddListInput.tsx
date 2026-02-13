import { TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";

export function AddListInput () {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New list"
        style={styles.textInput}
        onChangeText={setInput}
        value={input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center", 
  },

  textInput: {
    width: "90%",
    fontSize: 20,
    borderBottomColor: "#999999",
    borderBottomWidth: 0.5,
    paddingBottom: 15,
    color: "#999999"
  }
})