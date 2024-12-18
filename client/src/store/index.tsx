import { configureStore } from '@reduxjs/toolkit';
import { guessReducer, setGuess, guessType, incrementGuess, resetGame} from './slices/GuessSlice';



export const store = configureStore({
  reducer: {
    guess: guessReducer
    
  },
});


//export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export { setGuess, incrementGuess, resetGame};
export type {guessType};

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
