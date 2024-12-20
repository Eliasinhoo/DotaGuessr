import { useDispatch } from "react-redux"
import { useAppSelector } from "../hooks/hooks";
import { IoReloadOutline } from "react-icons/io5";
import { AppDispatch, resetGame, setReload } from "../store";

export default function WinBox() {

    const win = useAppSelector((state) => state.guess.win);
    const dispatch = useDispatch<AppDispatch>();
    
    const handleClick = (): void => {
        console.log('click')
        dispatch(resetGame());
    }
    const handleClickTwo = (): void => {
        dispatch(resetGame());
        dispatch(setReload());
    }
    
    if(win === null){
        return null;
    } else {
        return win ? <div className="z-10 flex items-center justify-center"><div className="flex space-x-4 justify-center items-center bg-back border-2 border-black rounded-md p-5 space-y-1 text-prim font-semibold w-[300px] z-10">
            <div>You win</div>
            <button><IoReloadOutline onClick={handleClickTwo}/></button>
            
            </div>
        </div >: 
        <div className="flex items-center justify-center">
        <div className="z-10 flex items-center justify-center p-5 space-x-4 space-y-1 font-semibold border-2 border-black rounded-md bg-back text-prim">
            <div>you lose</div> 
            <IoReloadOutline onClick={handleClick}/>
            <img src="\dota.gif" alt="mad sven" className="w-16 h-auto"/>
        </div>
        </div>
    }


}