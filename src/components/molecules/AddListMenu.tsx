import { Text, View, StyleSheet } from "react-native";
import { MenuGrid, GridItem } from "./MenuGrid";

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
  }
})

const colors = [
  "#E1289B", "#D23D33", "#C1A386", "#BF5AF2", "#734230", "#64D2FF",
  "#FF9F0A", "#FFE200", "#00EA96", "#047C52", "#6E7972", "#ff31c1"
];

const colorItemData: GridItem[] = [
  { id: "1", color: colors[0], type: "color" },
  { id: "2", color: colors[1], type: "color" },
  { id: "3", color: colors[2], type: "color" },
  { id: "4", color: colors[3], type: "color" },
  { id: "5", color: colors[4], type: "color" },
  { id: "6", color: colors[5], type: "color" },
  { id: "7", color: colors[6], type: "color" },
  { id: "8", color: colors[7], type: "color" },
  { id: "9", color: colors[8], type: "color" },
  { id: "10", color: colors[9], type: "color" },
  { id: "11", color: colors[10], type: "color" },
  { id: "12", color: colors[11], type: "color" }
];

const imageItemData: GridItem[] = [
  { id: "1", icon: "insert-drive-file", type: "icon" },
  { id: "2", icon: "shopping-cart", type: "icon" },
  { id: "3", icon: "discount", type: "icon" },
  { id: "4", icon: "card-giftcard", type: "icon" },
  { id: "5", icon: "monitor-heart", type: "icon" },
  { id: "6", icon: "directions-car", type: "icon" },
  { id: "7", icon: "wine-bar", type: "icon" },
  { id: "8", icon: "pets", type: "icon" },
  { id: "9", icon: "menu-book", type: "icon" },
  { id: "10", icon: "attach-file", type: "icon" },
  { id: "11", icon: "school", type: "icon" },
  { id: "12", icon: "sports-baseball", type: "icon" }
];


