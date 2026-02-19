import { create } from "zustand";
import { nanoid } from "nanoid/non-secure";

interface addProductProps {
  input: string;
  quantity: string;
  note: string;
  products: IProductData[];
  setInput: (input: string) => void;
  setQuantity: (quantity: string) => void;
  setNote: (note: string) => void;
  addProduct: () => void;
  resetState: () => void;
  toggleProduct: (id: string) => void;
}

interface IProductData {
  title: string;
  quantity: string;
  id: string;
  checked: boolean;
}

export const useProduct = create<addProductProps>((set, get) => ({
  input: "",
  quantity: "",
  note: "",
  products: [],
  setInput: (input) => set(() => ({ input: input })),
  setNote: (note) => set(() => ({ note: note })),
  setQuantity: (quantity) => set(() => ({ quantity: quantity })),
  addProduct: () => {
    const newProduct = {
      title: get().input,
      quantity: get().quantity,
      id: nanoid(),
      checked: false,
    };
    set(() => ({ products: [...get().products, newProduct] }));
  },
  resetState: () => set(() => ({ input: "", quantity: "", note: "" })),
  toggleProduct: (id) =>
    set((state) => ({
      products: state.products.map((prod) =>
        prod.id === id ? { ...prod, checked: !prod.checked } : prod,
      ),
    })),
}));
