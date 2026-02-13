import { View, StyleSheet } from "react-native";
import { AddListHeader } from "../components/organisms/AddListHeader";
import { AddListInput } from "../components/molecules/AddListInput";
import { AddListMenu } from "../components/molecules/AddListMenu";

export default function AddListModal () {
  return (
    <View style={styles.container}>
      <AddListHeader />
      <AddListInput />
      <AddListMenu />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
      gap: 20,
    }
})
