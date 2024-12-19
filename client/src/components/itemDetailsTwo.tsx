// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector} from '../hooks/hooks';
// import { fetchItemFromQueryState } from '../store/itemThunk'; 
// import { useGetRowQuery } from '../store/slices/apiSlice';

// const ItemDetailsTwo = ({ id }: { id: number }) => {
//   const dispatch = useAppDispatch();
  
//   const dog = useGetRowQuery(id);

//   const item = useAppSelector((state) => state.item); // Access slice state
//   useEffect(() => {
//     dispatch(fetchItemFromQueryState(id)); // Fetch item from query state
    
//   }, [dispatch, id, dog]);

  
//   console.log(item);
//   if (!item.id) return <p>Loading...</p>;

  

//   return (
//     <div>
//       <h1>Item Details</h1>
//       <p><strong>ID:</strong> {item.id}</p>
//       <p><strong>Name:</strong> {item.name}</p>
//       <p><strong>Price:</strong> ${item.price}</p>
      
//     </div>
//   );
// };

// export default ItemDetailsTwo;
