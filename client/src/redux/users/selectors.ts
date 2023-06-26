import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "constants/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state.users || initialState;

export const selectUsers = createSelector([selectSlice], state => state.users);
export const selectLoading = createSelector([selectSlice], state => state.loading);
export const selectError = createSelector([selectSlice], state => state.error);
