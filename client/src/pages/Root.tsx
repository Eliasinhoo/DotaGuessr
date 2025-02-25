
import { Outlet } from "react-router-dom"
import Header from "../components/Header.tsx"
import "../index.css"
import { COLORS } from '../constants/constants.ts';

  const images = [

    {
      id: 1,
      img: "bg-[url('/brewmaster-loading2.jpg')]"
    }
    
  ]

  const image = images[0];

  



export default function Root() {


  
    return (
        <div className="relative h-screen">
        
        {/* <div className={`absolute inset-0 ${image.img} bg-cover bg-center filter blur-sm z-0`}></div> */}
        <div className={`absolute inset-0 ${image.img} bg-cover bg-center filter blur-sm z-0`}></div>
        <div className={`absolute inset-0 z-10 bg-[${COLORS.BACKGROUND}] bg-opacity-50`}></div>

        
        <div className="relative z-10">
          
          <Header />
            <div className="items-center justify-center ">Aghanimle</div>
          <Outlet />
          </div>
        </div>
      
      
    );
  }