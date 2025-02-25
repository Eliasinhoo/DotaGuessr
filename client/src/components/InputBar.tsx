import { FormEvent } from "react";
import { useAppSelector } from "../hooks/hooks";
import { COLORS } from "../constants/constants";


interface InputBarProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export default function InputBar({ onSubmit, onChange, value }: InputBarProps) {

    const win = useAppSelector(state => state.guess.win);


    if (win == null) {
        return (<form onSubmit={onSubmit} className="z-10 flex items-center justify-center ">
            <div className="flex flex-row items-center gap-2 p-3 align-middle border-2 border-[$]"
                style={{
                    borderColor: COLORS.BACKGROUND, // Using the correct color for border
                }}>
                <input
                    onChange={onChange}
                    placeholder="Guess the item cost"
                    value={value}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className={`bg-transparent focus:outline-none placeholder:text-[${COLORS.PRIMARY_TEXT}] appearance-none`}
                    style={{color: COLORS.PRIMARY_TEXT}}
                />


                <img src="/gold.png" />
            </div>
        </form>)
    } else {
        return null;
    }



}