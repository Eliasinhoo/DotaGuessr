import { Link } from "react-router-dom";
import '../index.css';
import { useEffect, } from "react";
import axios from "axios";
import type RowData from "../types/types";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setItem, setPrice } from "../store";


export default function Header(){
    
    const dispatch = useAppDispatch();
    const reset = useAppSelector((state) => state.guess.reload);
    const num = Math.floor(Math.random() * (181 - 1 + 1)) + 1;
    
    useEffect(() => {
        
        const fetchRow = async () => {
          try {
            const response = await axios.get<RowData>(`http://localhost:8080/api/row/${num}`);
            
            
            dispatch(setItem(response.data));
            dispatch(setPrice(response.data.price))
          } catch (err: unknown) {
            console.error('Error fetching row:', err);

            
          } 
        };
        fetchRow();
    },[reset]);
    
    
    return <div className="text-white">
        <Link to="/game" className="underline"> Link to play</Link>
    </div>

    
}
