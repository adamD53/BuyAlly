import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

interface IFormInputProps extends Omit<TextInputProps, "style"> {
  error?: string;
  containerStyle?: object;
}

export default function FormInput({
  placeholder,
  error,
  containerStyle,
  value,
  onChange,
  ...textInputProps
}: IFormInputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        {...textInputProps}
        style={styles.input}
        placeholderTextColor="#BCBCBC"
        autoCapitalize={textInputProps.autoCapitalize ?? "none"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    color: "#ffffff",
    fontSize: 18,
    padding: 15,
    backgroundColor: "rgba(147, 147, 147, 0.5)",
    borderRadius: 10,
  },
  error: {
    color: "#FF8A8A",
    fontSize: 12,
    marginTop: 6,
  },
});
