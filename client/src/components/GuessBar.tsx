import { FaCheck, FaXbox } from 'react-icons/fa';
import { GoDash } from "react-icons/go";
//import { useSelector } from "react-redux";
//import type { guessType } from '../store';
import { useAppSelector } from '../hooks/hooks';








export default function GuessBar() {

    
    // const guessNumber = useSelector((state: guessType) => state.guess.guessNumber);

    const guessList = useAppSelector(state => state.guess.guessList);
    

    console.log('guess list:', guessList);

    return (
        <div className="flex items-center justify-center my-10 z-10">
            {guessList.map((item) => {

                if(item.correct === null){
                    console.log('null')
                    return <GoDash key={item.id}/>
                } else {
                    console.log('not null')
                    return item.correct ? <FaCheck key={item.id} /> : <FaXbox key={item.id} />
                }

                
            })}
            
        </div>
    );
}