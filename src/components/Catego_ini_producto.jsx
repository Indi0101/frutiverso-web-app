import "./Catego_ini_producto.scss"
function Catego_ini_producto(){
   
    return(
        
        <div className="catego_ini_producto">
            <div className="Frutas_verduras">
                <div className="div_img">
                    <img src="clasificacion_productos/fru_ver2.jpg!d"></img>
                </div>
                <a href="/Producto" className="enlace_nombre">Frutas & Verduras</a>
            </div>
            <div className="Fermentados">
                 <div className="div_img">
                    <img src="clasificacion_productos/fermen.jpg!d"></img>
                </div>
                <a href="/Producto" className="enlace_nombre">Fermentados</a>
            </div>
            <div className="Hiervas">
                <div className="div_img">
                    <img src="clasificacion_productos/hierba.jpg!d"></img>
                </div>
                <a href="/Producto" className="enlace_nombre">Hierbas</a>
            </div>
            <div className="Jabones">
                <div className="div_img">
                    <img src="clasificacion_productos/jabon.jpg!d"></img>
                </div>
                <a href="/Producto" className="enlace_nombre">Jabones</a>
            </div>
        </div>
    );
};
export default Catego_ini_producto;