import { useRouter } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeView = ({ children }: any) => {
  const insets = useSafeAreaInsets();

  return <View style={ [styles.container, { paddingTop: insets.top + 30}]}>{ children }</View>
}

export function AddListHeader () {
  const router = useRouter();

  return (
    <SafeView>
      <View style={styles.textButtons}>
        <Text style={styles.refText} onPress={() => router.back()}>Cancel</Text>
        <Text style={styles.refText} onPress={() => router.back()}>Done</Text>
      </View>
      <Text style={styles.headerText}>Add List</Text>
    </SafeView>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    gap: 20
  },

  textButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  refText: {
    fontSize: 15,
    color: "blue"
  },

  headerText: {
    color: "#111111",
    fontSize: 30,
    fontWeight: "bold",
    width: "100%"
  },
})