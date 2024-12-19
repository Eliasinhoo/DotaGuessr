import { useAppSelector } from "../hooks/hooks";




export default function InfoBox({hovering}: {hovering: boolean}){

    const name = useAppSelector((state) => state.item.name)

    return(<div className={`flex justify-center items-center w-1/2 mx-auto z-30 ${hovering? "":"hidden"}`}>
        
    <div className={` bg-back border-2 border-black rounded-md px-5  space-y-1 flex-nowrap text-prim font-semibold `}>
           <div className="text-center text-white bg-head -me-5 -ms-5">{name}</div>
            <p>+ <span className="font-bold text-white">30</span> Intelligence </p>
            <p>+ <span className="font-bold text-white">8.5</span> Mana Regeneration</p>
    </div>
    </div>);
}