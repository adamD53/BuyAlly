import { Pressable, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export type AntDesginIconType = React.ComponentProps<typeof AntDesign>["name"];

interface IFormButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  iconName?: AntDesginIconType;
}

export function FormButton({ title, onPress, disabled, iconName }: IFormButtonProps) {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={[styles.button, disabled && styles.disabled]}>
      {title && <AntDesign name={iconName} size={24} color="white" />}
      <Text style={styles.text}>{title}</Text>
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
    backgroundColor: "#F9F9F9",
    flexDirection: "row",
    marginVertical: 18,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
});
