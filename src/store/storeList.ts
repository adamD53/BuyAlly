import { create } from "zustand";
import { nanoid } from "nanoid/non-secure";
import { MaterialIconType } from "../components/molecules/MenuGrid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

interface addListProps {
  input: string;
  color: string;
  icon: MaterialIconType;
  lists: IListData[];
  setInput: (input: string) => void;
  setColor: (color: string) => void;
  setIcon: (icon: MaterialIconType) => void;
  addList: () => string;
  fetchList: (listID: string) => Promise<void>;
  addProductToList: (listID: string | string[], productID: string) => void;
  resetState: () => void;
}

interface IListData {
  title: string;
  icon: MaterialIconType;
  color: string;
  id: string;
  productIDs: string[];
}

export const useList = create<addListProps>((set, get) => ({
  input: "",
  color: "grey", // default color value
  icon: "disabled-by-default", // default icon
  lists: [],
  setInput: (input) => set(() => ({ input: input })),
  setColor: (color) => set(() => ({ color: color })),
  setIcon: (icon) => set(() => ({ icon: icon })),
  addList: () => {
    const newId = nanoid();
    const newList = {
      title: get().input,
      icon: get().icon,
      color: get().color,
      productIDs: [],
      id: newId,
    };
    set(() => ({ lists: [...get().lists, newList] }));
    return newId;
  },
  addProductToList: (listID, productID) =>
    set((state) => ({
      lists: state.lists.map((list) => (list.id === listID ? { ...list, productIDs: [...list.productIDs, productID] } : list)),
    })),
  resetState: () => set(() => ({ input: "", color: "grey", icon: "disabled-by-default" })),
  fetchList: async (listID) => {
    try {
      const currentList = get().lists.find((list) => list.id == listID);
      console.log(`color: ${currentList}`);
      const newDocRef = doc(db, "lists", listID);
      await setDoc(newDocRef, {
        color: currentList?.color,
        icon: currentList?.icon,
        productIDs: currentList?.productIDs,
        title: currentList?.title,
      });
      console.log(`List document created with id: ${newDocRef.id}`);
    } catch (err: unknown) {
      console.log(`Error with creating a document: ${err}`);
    }
  },
}));
