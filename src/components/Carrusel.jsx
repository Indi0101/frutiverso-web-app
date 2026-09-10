import { useEffect, useState } from "react";
import "./App.css"

function carrusel()
{
    const imagenes=["carrusel/5.jpg!d","carrusel/7.jpg!d","carrusel/8.jpg!d"];
    const [index, setIndex]=useState(0);
    
    useEffect(()=>{

        const tiempo=setInterval(()=>{
             setIndex((prev)=>(prev+1)% imagenes.length);
        },3000);

        return ()=>clearInterval(tiempo);
    },[]);
    return(
        <div className="carrusel">
            <div className="carrusel-track" style={{transform:` translateX(-${index*100}%)`}}>
                {imagenes.map((src,i) =>(
                    <img key={i} src={src} alt={`Imagen ${i+1}`}></img>
                ))}
            </div>
           
           
        </div>
    );
}
export default carrusel;