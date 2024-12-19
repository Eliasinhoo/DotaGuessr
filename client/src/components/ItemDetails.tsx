import React from 'react';
import { useGetRowQuery } from '../store/slices/apiSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setItem } from '../store';

const ItemDetails: React.FC<{ id: number }> = ({ id }) => {
    const dispatch = useAppDispatch();
    const {
    data: item,   // Destructure the fetched item data
    isLoading,    // Loading state
    isError,      // Error state
           // Error details
  } = useGetRowQuery(id);

  dispatch(setItem()); // Fetch item from query state
  //const dog = useAppSelector((state) => state.item);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: </p>;
  if (!item) return <p>No item found</p>;

  

  return (
    <div>
      <h2>Item Details</h2>
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Price:</strong> ${item.price}</p>
    </div>
  );
};

export default ItemDetails;
