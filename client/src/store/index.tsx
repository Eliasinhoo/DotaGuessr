import { configureStore } from '@reduxjs/toolkit';
import { guessReducer, setGuess, guessType, incrementGuess, resetGame, setPrice, setReload} from './slices/GuessSlice';
import { setItem, clearItem, itemReducer } from './slices/ItemSlice';


export const store = configureStore({
  reducer: {
    guess: guessReducer,
    item: itemReducer
    
  },
});


//export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export { setGuess, incrementGuess, resetGame, setPrice, setReload};
export type {guessType};
export {setItem, clearItem};

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
