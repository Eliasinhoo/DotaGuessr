import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface listobject {
    id: number,
    correct: boolean | null,
    
}

interface guessType {

    guessValue: number | null;
    guessNumber: number;
    guessList: listobject[];
    answer: number | null;
    win: boolean | null;
    reload: number;
}



const initialState: guessType = {
    guessValue: null,
    guessNumber: 1,
    guessList: [
        {
            id: 1,
            correct: null          
        },
        {
            id: 2,
            correct: null 
        },
        {
            id: 3,
            correct: null 
        },
        {
            id: 4,
            correct: null 
        },
        {
            id: 5,
            correct: null
        },
    ],
    answer: null,
    win: null,
    reload: 1,
}



const guessSlice = createSlice({
    name: 'guess',
    initialState,
    reducers: {
        setGuess: (state, action: PayloadAction<number>) => {
            state.win = null;
            state.guessValue = action.payload;
            const newlist = state.guessList.map((item: listobject)=>{
                //if (item.id === (state.guessNumber)&& state.guessValue == state.answer){
                if (item.id === (state.guessNumber)){
                    const isCorrect: boolean | null = state.guessValue == state.answer;
                    if(isCorrect){
                        state.win = true;
                    }
                    return{...item, correct: isCorrect}
                    
                }
                else{
                    return item
                }
            });
            state.guessList = newlist;

        },
        incrementGuess: (state) => {
            if(state.guessNumber <= 5){
                state.guessNumber+= 1;
            } else {
                state.guessNumber = 1;
                state.win = false;
                const newlist = state.guessList.map((item: listobject)=>{
                    return{...item, correct: null}
                });
                state.guessList = newlist;
            }
        },
        resetGame: (state) => {
            state.guessValue = initialState.guessValue;
            state.guessList = initialState.guessList;
            state.guessNumber = initialState.guessNumber;
            state.win = initialState.win;
            //more in future
        },
        setPrice: (state, action: PayloadAction<number | null>) => {
            state.answer = action.payload;
        },
        setReload: (state) => {
            state.reload = state.reload+1;
        }
        
    }
});

export const { setGuess, incrementGuess, resetGame, setPrice, setReload } = guessSlice.actions;
export const guessReducer = guessSlice.reducer;
export type {guessType}
