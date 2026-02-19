import { create } from "zustand";
import { nanoid } from "nanoid/non-secure";

interface addListProps {
  input: string;
  color: string;
  icon: string;
  lists: IListData[];
  id: string;
  setInput: (input: string) => void;
  setColor: (color: string) => void;
  setIcon: (icon: string) => void;
  addList: () => void;
  resetState: () => void;
}

interface IListData {
  title: string;
  icon: any;
  color: string;
  id: string;
}

export const useList = create<addListProps>((set, get) => ({
  input: "",
  color: "grey", // default color value
  icon: "disabled-by-default", // default icon
  lists: [],
  id: "0",
  setInput: (input) => set(() => ({ input: input })),
  setColor: (color) => set(() => ({ color: color })),
  setIcon: (icon) => set(() => ({ icon: icon })),
  addList: () => {
    const newList = {
      title: get().input,
      icon: get().icon,
      color: get().color,
      id: nanoid(),
    };
    set(() => ({ lists: [...get().lists, newList] }));
  },
  resetState: () =>
    set(() => ({ input: "", color: "grey", icon: "disabled-by-default" })),
}));
