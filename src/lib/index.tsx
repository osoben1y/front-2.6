import { configureStore } from "@reduxjs/toolkit";
import wishes from "./features/wishList";
import likesSlice from "./features/likesSlice";
import cartSlice from "./features/cartSlice";
const store = configureStore({
  reducer: {
    wishes,
    likesSlice,
    cartSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
