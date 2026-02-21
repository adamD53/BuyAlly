import { Pressable, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type FeatherIconType = React.ComponentProps<typeof Feather>["name"];
interface IFooterButtonProps {
  title: string,
  icon: FeatherIconType
}

export function FooterButton({ title, icon }: IFooterButtonProps) {
  return (
    <Pressable style={styles.icon}>
      <Feather name={icon} size={24} color="#8e8e93" />
      <Text style={styles.iconText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 3
  },

  iconText: {
    color: "#8e8e93"
  }
})