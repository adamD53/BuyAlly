import { Pressable, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export type AntDesginIconType = React.ComponentProps<typeof AntDesign>["name"];

interface IFormButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  iconName?: AntDesginIconType;
  appearance: "dark" | "light";
}

export function FormButton({ title, onPress, disabled, iconName, appearance }: IFormButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, appearance === "light" ? styles.light : styles.dark, disabled && styles.disabled]}
    >
      {iconName && <AntDesign name={iconName} size={24} color="white" />}
      <Text style={[styles.text, appearance === "light" ? styles.light : styles.dark]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: "100%",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 18,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  dark: {
    backgroundColor: "#2e363d",
    color: "#f9f9f9",
  },
  light: {
    backgroundColor: "#f9f9f9",
    color: "#000000",
  },
});
