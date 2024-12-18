import { createSlice } from "@reduxjs/toolkit";


interface itemType {
    id: number;
    name: string;
    price: number;
}

const initialState: itemType = {
    id: 200,
    name: '',
    price: 0
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
            fetchItem: (state ) =>{
                state.id = 1;
                state.name = 'hi';
                state.price = 4;
            }
    }
})

export const itemReducer = itemSlice.reducer;