import React from "react";
import Carrusel from "./Carrusel"
import "./App.css"
import Catego_ini_producto from "./Catego_ini_producto";
import Receta_ini from "./Receta_ini";
import Pie_pagina from "./Pie_pagina";

function Inicio(){

    return(
        <div > 
            <Carrusel />
            <div className="titulo_en_inicio">
                <br/> <br/> <br/><br/><br/><br/><br/><br/>
                <h1>Productos</h1>
                <h4>Conoce nuestros productos</h4>
                </div>
                
            <Catego_ini_producto/>
             <br/> <br/> <br/><br/><br/><br/><br/><br/>
             <div className="titulo_en_inicio">
                <h1 >Recetas</h1>
                <h4>Conoce todas las opciones basadas en nuestros productos</h4>
            </div>
            <Receta_ini />
             <br/> <br/> <br/><br/><br/><br/><br/><br/>
            <div className="pie_pagina">
                <Pie_pagina/>
            </div>
        </div>
    );
}

export default Inicio;