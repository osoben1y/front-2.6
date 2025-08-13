import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ILikes {
  data: number[];
}

const initialState: ILikes = {
  data: JSON.parse(localStorage.getItem("likes") || "[]") || [],
};

export const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLikes: (state, actions: PayloadAction<number>) => {
      if (state.data.includes(actions.payload)) {
        state.data = state.data.filter((id) => id !== actions.payload);
        localStorage.setItem("likes", JSON.stringify(state.data));
      } else {
        state.data = [...state.data, actions.payload];
        localStorage.setItem("likes", JSON.stringify(state.data));
      }
    },
  },
});

export const { toggleLikes } = likesSlice.actions;
export default likesSlice.reducer;
