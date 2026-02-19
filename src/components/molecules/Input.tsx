import { TextInput, View, StyleSheet } from "react-native";

interface InputProps {
  value: string,
  placeholder: string,
  color?: string,
  onChange: (text: string) => void,
}

export function Input({ value, onChange, placeholder, color }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={color ? color : "#BCBCBC"}
        style={{
          ...styles.textInput,
          color: color ? color : "#BCBCBC",
          borderBottomColor: color ? color : "#999999",
        }}
        onChangeText={onChange}
        value={value}
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
    borderBottomWidth: 0.5,
    paddingBottom: 20,
  }
})