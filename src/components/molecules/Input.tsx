import { TextInput, View, StyleSheet } from "react-native";

interface InputProps {
  value: string;
  placeholder: string;
  color?: string;
  maxCharLength?: number;
  onChange: (text: string) => void;
}

const DEFAULT_INPUT_LENGTH = 25;

export function Input({ value, onChange, placeholder, color, maxCharLength }: InputProps) {
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
        maxLength={maxCharLength ? maxCharLength : DEFAULT_INPUT_LENGTH}
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
  },
});
