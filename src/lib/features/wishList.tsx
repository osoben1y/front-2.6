import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types";

interface IWishList {
  data: IProduct[];
}

const initialState: IWishList = {
  data: JSON.parse(localStorage.getItem("wishes") || "[]") || [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishes: (state, actions: PayloadAction<IProduct>) => {
      const inx = state.data.findIndex(
        (wish) => wish.id === actions.payload.id
      );
      if (inx < 0) {
        state.data.push(actions.payload);
        localStorage.setItem("wishes", JSON.stringify(state.data));
      } else {
        state.data.splice(inx, 1);
      }
    },
  },
});

export const { toggleWishes } = wishListSlice.actions;
export default wishListSlice.reducer;
