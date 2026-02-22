import { Pressable, Text } from "react-native";

interface ITextButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
}

export function TextButton({ title, onPress, color }: ITextButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={{ color: color ? color : "blue", fontSize: 16 }}>{title}</Text>
    </Pressable>
  );
}
