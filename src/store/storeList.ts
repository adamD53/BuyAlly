import { create } from "zustand";
import { nanoid } from "nanoid/non-secure";
import { MaterialIconType } from "../components/molecules/MenuGrid";

interface addListProps {
  input: string;
  color: string;
  icon: MaterialIconType;
  lists: IListData[];
  setInput: (input: string) => void;
  setColor: (color: string) => void;
  setIcon: (icon: MaterialIconType) => void;
  addList: () => void;
  addProductToList: (listId: string | string[], productId: string) => void;
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
    const newList = {
      title: get().input,
      icon: get().icon,
      color: get().color,
      productIDs: [],
      id: nanoid(),
    };
    set(() => ({ lists: [...get().lists, newList] }));
  },
  addProductToList: (listID, productID) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listID ? { ...list, productIDs: [...list.productIDs, productID] } : list,
      ),
    })),
  resetState: () => set(() => ({ input: "", color: "grey", icon: "disabled-by-default" })),
}));
