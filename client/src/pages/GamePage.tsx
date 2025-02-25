

import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import GuessBar from "../components/GuessBar";
import { setGuess, incrementGuess } from "../store";
import { FormEvent } from 'react';
import { useState } from "react";
import WinBox from "../components/WinBox";
import InputBar from "../components/InputBar";
import InfoBox from "../components/InfoBox";


export default function GamePage() {


    const dispatch = useAppDispatch();
    const [inputvalue, setInputValue] = useState('');
    const [isHovering, setIsHovering] = useState<boolean>(false);


    const guessValue = useAppSelector(state => state.guess.guessValue);
    const guessNumber = useAppSelector(state => state.guess.guessNumber);
    console.log('UR SEARCH IS:', guessValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setInputValue(newValue)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setGuess(Number(inputvalue)));
        dispatch(incrementGuess());
        setInputValue('');

        console.log(guessNumber);

    }

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const id = useAppSelector((state) => state.item.id)


    return (
        <div className="flex-col items-center justify-center ">

            <img src={`/items/image${id}.png`} alt="fortnite" className="z-10 w-64 h-auto mx-auto mb-10 border-4 border-black rounded-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ backgroundClip: "padding-box" }}/>

            <InfoBox hovering={isHovering} />
            {/* <div className={`${isHovering? "":"hidden"}`}>text text text</div> */}
            <InputBar onSubmit={handleSubmit} onChange={handleChange} value={inputvalue} />
            <GuessBar />
            <div className="z-10 flex justify-center my-10">Guess Number: {guessNumber - 1}</div>

            <WinBox />

        </div>

    );
}