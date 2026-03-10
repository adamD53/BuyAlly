import { TextInput, View, StyleSheet, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  color?: string;
}

const DEFAULT_INPUT_LENGTH = 25;

export function Input({
  value,
  onChangeText,
  placeholder,
  color,
  maxLength,
  keyboardType,
  defaultValue,
}: InputProps) {
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
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength ? maxLength : DEFAULT_INPUT_LENGTH}
        keyboardType={keyboardType}
        defaultValue={defaultValue}
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
