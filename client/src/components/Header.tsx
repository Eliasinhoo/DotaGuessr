import { Link } from "react-router-dom";
import '../index.css';
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/hooks";
import axios from "axios";
import type RowData from "../types/types";
import { setItem } from "../store";

export default function Header(){

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        
        
        const fetchRow = async () => {
          try {
            const response = await axios.get<RowData>(`http://localhost:8080/api/row/${4}`);
            
            
            dispatch(setItem(response.data));
          } catch (err: unknown) {
            console.error('Error fetching row:', err);

            
          } 
        };
    
        fetchRow();
      }, []);
      // USE THAT ARRAY
    return <div className="text-white">
        <Link to="/game" className="underline"> Link to play</Link>
    </div>
}
