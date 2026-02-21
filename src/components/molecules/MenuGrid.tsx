import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useList } from "@/src/store/storeList";

export type MaterialIconType = React.ComponentProps<typeof MaterialIcons>["name"];

interface IColorItem {
  id: string,
  color: string,
  type: "color"
}

interface IIconItem {
  id: string,
  icon: MaterialIconType,
  type: "icon"
}

export type GridItem = IColorItem | IIconItem;

function Item({ item }: { item: GridItem }) {
  const { setColor, color, setIcon, icon } = useList();

  return (
    <Pressable
      style={styles.item}
      onPress={() => item.type == "color" ? setColor(item.color) : setIcon(item.icon)}>
      {item.type == "color" ? (
        <View style={{ ...styles.checkedContainer, borderColor: color == item.color ? item.color : "transparent" }}>
          <View
            style={{
              ...styles.colorIcon,
              backgroundColor: item.color,
              borderColor: (color == item.color ? "black" : "transparent")
            }}
          />
        </View>
      ) : (
        <View style={{ ...styles.checkedContainer, borderColor: icon == item.icon ? item.icon : "transparent" }}>
          <View style={styles.imageIcon}>
            <MaterialIcons name={item.icon} size={24} color="#565656" />
          </View>
        </View>
      )}
    </Pressable>
  );
}

export function MenuGrid({ data }: { data: GridItem[] }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={6}
        renderItem={({ item }) => <Item item={item}></Item>}
        keyExtractor={(item) => item.id}
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
    marginRight: 20,
  },

  checkedContainer: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    borderWidth: 1,
    borderColor: "transparent",
    padding: 1.5
  },

  colorIcon: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
  },

  imageIcon: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  }
})
