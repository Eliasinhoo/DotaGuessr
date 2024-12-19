import '../index.css';
import ItemDetails from '../components/ItemDetails';
// import ItemDetailsTwo from '../components/itemDetailsTwo';




export default function TestPageTwo(){

  

  

 
    return(
        <div className='flex flex-col items-center justify-center'>
            <div className="p-5 space-y-1 font-semibold border-2 border-black rounded-md bg-back flex-nowrap text-prim" >   
        <div className="font-sans text-3xl text-center text-white">TEST</div>
        
        </div>
        <div className="p-5 mt-5 space-y-1 font-semibold border-2 border-black rounded-md bg-back flex-nowrap text-prim" > 
        <h1>Fetched Row</h1>
        
        <ItemDetails id={8}/>
        {/* <ItemDetailsTwo id={3}/> */}

        <div>yo</div>
        
        </div>
        </div> 
    );
}