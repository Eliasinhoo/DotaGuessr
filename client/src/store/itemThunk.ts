import { AppDispatch, RootState } from './index'; // Replace with your actual store types
import { apiSlice } from './slices/apiSlice';
import { setItem } from './index';



export const fetchItemFromQueryState = (id: number) => (dispatch: AppDispatch, getState: () => RootState) => {
  // Access the query state
  const queryState = apiSlice.endpoints.getRow.select(id)(getState());
  
  // If data exists, dispatch it to the slice
  if (queryState?.data) {
    const { id, name, price } = queryState.data;
    dispatch(setItem({ id, name, price }));
    
  } else if (queryState?.isError) {
    console.error('Error fetching item:', queryState.error);
  } else if (queryState?.isLoading) {
    console.log('Item is loading...');
  }
};
