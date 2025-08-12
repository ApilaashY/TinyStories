import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {} as Record<string, number>,
  reducers: {
    setMaxEpisodes: (state, action) => {
      state[action.payload.id] = action.payload.value;
    },
  },
});

export const store = configureStore({
  reducer: {
    maxEpisodes: counterSlice.reducer,
  },
});

export const { setMaxEpisodes } = counterSlice.actions;
export default counterSlice.reducer;
