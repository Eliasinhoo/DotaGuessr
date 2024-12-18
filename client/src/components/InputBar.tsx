import { FormEvent } from "react";
import { useAppSelector } from "../hooks/hooks";


interface InputBarProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export default function InputBar({onSubmit, onChange, value}: InputBarProps) {
    
    const win = useAppSelector(state => state.guess.win);


    if(win == null){
        return(<form onSubmit={onSubmit} className="flex items-center justify-center z-10">

            <input onChange={onChange} placeholder="Type a cost"value={value} className="bg-transparent border border-prim focus:outline-none"/>
            </form>)
    } else {
        return null;
    }
    
    
    
}