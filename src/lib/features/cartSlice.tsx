import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICartProduct, IProduct } from "../../types";

interface ICart {
  data: ICartProduct[];
}

const initialState: ICart = {
  data: JSON.parse(localStorage.getItem("carts") || "[]") || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, actions: PayloadAction<IProduct>) => {
      const inx = state.data.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (inx < 0) {
        state.data.push({ ...actions.payload, amount: 1 });
      }
      localStorage.setItem("carts", JSON.stringify(state.data));
    },
    removeItem: (state, actions: PayloadAction<IProduct>) => {
      const inx = state.data.findIndex(
        (item) => item.id === actions.payload.id
      );
      state.data.splice(inx, 1);
      localStorage.setItem("carts", JSON.stringify(state.data));
    },
    incrementCount: (state, actions: PayloadAction<IProduct>) => {
      state.data = state.data.map((item) =>
        item.id === actions.payload.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    },
    decrementCount: (state, actions: PayloadAction<IProduct>) => {
      state.data = state.data.map((item) =>
        item.id === actions.payload.id
          ? { ...item, amount: item.amount - 1 }
          : item
      );
    },
    clearAll: (state) => {
      state.data = [];
      localStorage.setItem("carts", JSON.stringify(state.data));
    },
  },
});

export const { addItem, clearAll, incrementCount, decrementCount, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
