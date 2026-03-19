import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import { ModalHeader } from "../components/molecules/ModalHeader";
import { Input } from "../components/molecules/Input";
import { AddListMenu } from "../components/molecules/AddListMenu";
import { LIST_ID_LENGTH, LIST_NAME_MAX_LENGTH, useList } from "../store/storeList";
import { router } from "expo-router";
import SwitchMenu, { SwitchMenuOption } from "../components/molecules/SwitchMenu";
import { useProduct } from "../store/storeProduct";

export default function AddListModal() {
  const { setInput, setIDInput, addList, postList, addListByID, resetState, input, idInput } =
    useList();
  const { fetchProducts } = useProduct();
  const [mode, setMode] = useState<SwitchMenuOption>("new");

  const handleAddList = async () => {
    switch (mode) {
      case "new": {
        const id = addList();
        postList(id);
        resetState();
        router.back();
        break;
      }
      case "existing": {
        if (idInput.length === LIST_ID_LENGTH) {
          const listAdded = await addListByID();
          if (!listAdded) {
            Alert.alert(
              "Failed to add list from given ID. Your ID might be incorrect or you trying to add list that you already have",
            );
          }
          fetchProducts();
          resetState();
          router.back();
        }
        break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <ModalHeader onSubmit={handleAddList} title="Add list" />
      <SwitchMenu
        firstOptionTitle="Create new list"
        secondOptionTitle="Add existing list"
        onChange={(opt) => setMode(opt === "new" ? "new" : "existing")}
      />
      {mode === "new" ? (
        <>
          <Input
            placeholder="New list"
            onChangeText={(text) => setInput(text)}
            value={input}
            maxLength={LIST_NAME_MAX_LENGTH}
          />
          <AddListMenu />
        </>
      ) : (
        <>
          <Input
            placeholder="Existing list id"
            onChangeText={(id) => setIDInput(id)}
            value={idInput}
            maxLength={LIST_ID_LENGTH}
          />
          <Text style={styles.errorText}>
            {idInput.length < 15 && `ID has to be ${LIST_ID_LENGTH} characters long`}
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    gap: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
});
