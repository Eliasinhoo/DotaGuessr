import { Link } from "react-router-dom";
import '../index.css';

export default function PlayButton(){
    return(<div className="flex flex-col items-center justify-center">
        <Link to="/game" >
    <div className="p-5 mt-8 space-y-1 font-semibold border-2 rounded-md bg-dotagreen border-slate-300 flex-nowrap text-prim" > 
        <div className="tracking-widest text-white">PLAY</div>
    </div>
    </Link>
    </div>
    )
}
