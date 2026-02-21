import { View, StyleSheet, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

interface IListItemProps {
  title: string,
  icon: any,
  color: string,
  id: string
}

export function ListItem({ title, icon, color, id }: IListItemProps) {
  const openList = () => {
    console.log(`Switching to ${id}`);
    router.navigate(`lists/[${id}]`);
  }

  return (
    <Pressable style={styles.container} onPress={openList}>
      <View style={{ ...styles.icon, backgroundColor: color }}><MaterialIcons name={icon} size={24} color="#FFFFFF" /></View>
      <Text style={{ fontSize: 20, fontWeight: 600 }}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 70,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15
  },

  icon: {
    width: 50,
    height: 50,
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15
  }
})