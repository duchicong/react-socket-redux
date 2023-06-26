import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from 'constants/types';
import data from './data.json';
import { IUser } from './types';

export const initialState = {
  users: data.data.items,
  loading: false,
  error: {}
}

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state, _action) => {
      state.loading = true;
    },
    getUsersDone: (state, action: PayloadAction<IUser[]>) => {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersError: (state, action: PayloadAction<IError>) => {
      state.error = action.payload
    },
    searchByNickname: (state, action: PayloadAction<string>) => {
      state.users.filter(item => item.nickname.includes(action.payload))
      console.log('aaaa ', {action, users: state})
    }
  }
});

export const { actions: usersAction, reducer: usersReducer } = slice;

export const useUsersSlice = () => {
  return { actions: slice.actions }
}