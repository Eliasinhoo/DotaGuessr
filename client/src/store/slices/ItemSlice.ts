import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { apiSlice } from './apiSlice';
import type RowData from '../../types/types';


const initialState: RowData = {
  id: null,
  name: null,
  price: null,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<RowData>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.price = action.payload.price;
    },
    clearItem(state) {
      state.id = null;
      state.name = null;
      state.price = null;
    },
  },
});

export const { setItem, clearItem } = itemSlice.actions;

export const itemReducer = itemSlice.reducer;
