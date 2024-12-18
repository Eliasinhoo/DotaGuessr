import '../index.css';
import PlayButton from '../components/PlayButton';

export default function HomePage(){
    return(
        <div className='flex flex-col items-center justify-center'>
            <div className="bg-back border-2 border-black rounded-md p-5 space-y-1 flex-nowrap text-prim font-semibold" >   
        <div className="text-3xl font-sans text-white text-center">HomePage</div>
        
        </div>
        <div className="bg-back border-2 border-black rounded-md p-5 mt-5 space-y-1 flex-nowrap text-prim font-semibold" > 
            <p>Can you guess the correct price of these Dota Items?</p>
        </div>

        <PlayButton />

        </div> 
    );
}