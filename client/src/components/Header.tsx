import { Link } from "react-router-dom";
import '../index.css';

export default function Header(){
    return <div className="text-white">
        <Link to="/game" className="underline"> Link to play</Link>
    </div>
}
