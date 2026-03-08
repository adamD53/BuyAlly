import { Text, View, StyleSheet } from "react-native";
import { MenuGrid } from "./MenuGrid";
import { imageItemData } from "@/src/data/menuGridData";
import { colorItemData } from "@/src/data/menuGridData";

export function AddListMenu() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>Color</Text>
      <MenuGrid data={colorItemData} />
      <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 30 }}>Icon</Text>
      <MenuGrid data={imageItemData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
});
