import { Pressable, StyleProp, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export type AntDesginIconType = React.ComponentProps<typeof AntDesign>["name"];

interface ILoginButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  iconName?: AntDesginIconType;
}

export function LoginButton({ title, onPress, disabled, iconName }: ILoginButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
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
    backgroundColor: "#313538",
    flexDirection: "row",
    marginVertical: 5,
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: "#F9F9F9",
    fontSize: 16,
    fontWeight: "600",
  },
});
