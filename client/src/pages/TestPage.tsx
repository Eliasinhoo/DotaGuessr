import '../index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface RowData {
    id: number;
    name: string;
    price: number;
}

export default function TestPage(){


    const [row, setRow] = useState<RowData | null>(null); // Store the whole row
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRow = async () => {
          try {
            const response = await axios.get<RowData>(`http://localhost:8080/api/row/${1}`);
            setRow(response.data); // Store the entire row in state
          } catch (err: unknown) {
            console.error('Error fetching row:', err);
            if(err instanceof Error){
                setError(err.message);
            } else {
                setError('An unkown error occured');
            }
            
          } finally {
            setLoading(false);
          }
        };
    
        fetchRow();
      }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    
    return(
        <div className='flex flex-col items-center justify-center'>
            <div className="p-5 space-y-1 font-semibold border-2 border-black rounded-md bg-back flex-nowrap text-prim" >   
        <div className="font-sans text-3xl text-center text-white">TEST</div>
        
        </div>
        <div className="p-5 mt-5 space-y-1 font-semibold border-2 border-black rounded-md bg-back flex-nowrap text-prim" > 
        <h1>Fetched Row</h1>

        {/* Access specific properties */}
        {row ? (
        <div>
        <p><strong>ID:</strong> {row.id}</p>
        <p><strong>Name:</strong> {row.name}</p>
        <p><strong>Price:</strong> {row.price}</p>

        {/* Access the entire row if needed */}
        <pre>{JSON.stringify(row, null, 2)}</pre>
        </div>
        ) : (
        <p>No data found</p>
        )}
        </div>
        </div> 
    );
}