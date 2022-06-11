import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITattoo } from "../../../types/types";

const initialState: ITattoo[] = [];

const tattoosSlice = createSlice({
  name: "tattoos",
  initialState,

  reducers: {
    loadTattoos: (tattoos: ITattoo[], action: PayloadAction<ITattoo[]>) => [
      ...action.payload,
    ],
    deleteTattoo: (tattoos: ITattoo[], action) =>
      tattoos.filter((tattoo) => tattoo._id !== action.payload),
    createTattoo: (tattoo, action: PayloadAction<FormData>) => ({
      ...tattoo,
    }),
    loadTattoosByUser: (
      tattoos: ITattoo[],
      action: PayloadAction<ITattoo[]>
    ) => [...action.payload],
  },
});

export default tattoosSlice.reducer;

export const {
  loadTattoos: loadTattoosActionCreator,
  deleteTattoo: deleteTattooActionCreator,
  createTattoo: createTattooActionCreator,
  loadTattoosByUser: loadTattoosByUserActionCreator,
} = tattoosSlice.actions;
