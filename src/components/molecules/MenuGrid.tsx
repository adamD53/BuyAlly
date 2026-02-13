import { View, StyleSheet, FlatList, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface IColorItem {
  id: string,
  color: string,
  type: "color"
}

interface IIconItem {
  id: string,
  name: any
  type: "icon"
}

export type GridItem = IColorItem | IIconItem;

const Item = ({ item }: { item: GridItem }) => {
  return (
    <View style={styles.item}>
      {item.type == "color" ? (
        <View style={{ backgroundColor: item.color, ...styles.circle }} />
      ) : (
        <View style={styles.image}><MaterialIcons name={item.name} size={24} color="#565656" /></View>
      )}
    </View>
  );
}

export function MenuGrid ({ data }: { data: GridItem[] }) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        numColumns={6}
        renderItem={Item}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
  },

  item: {
    flex: 1,
    maxWidth: "16%", 
    height: 40,
    marginVertical: 10,
    marginRight: 20
  },

  circle: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center"
  }
})
