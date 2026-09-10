import "./App.css"
function Pie_pagina(){
    return(
        <div className="conte_pie_pagina">
            <div className="conte_1">
                <div className="proveedores">
                 <h4 className="texto_h4_pie">Conoce nuestros proveedores</h4>
                 <button className="btn-proveedores">Visitar</button>
                </div>
               
            </div>
            <div className="conte_2">
                <div className="productos div-cont2">
                    <h3>Productos</h3>
                    <ul className="list_producto">
                        <li>Frutas & Verduras</li>
                        <li>Fermentados</li>
                        <li>Hierbas</li>
                        <li>Jabones</li>
                    </ul>
                </div>
                <div className="connect div-cont2">
                    <h3>Let's Connect</h3>
                    <ul className="list_connect ">
                        <li><i class="bi bi-facebook"> Facebook</i></li>
                        <li><i class="bi bi-instagram"> Instagram</i></li>
                    </ul>
                </div>
                <div className="Qsomos div-cont2">
                    <h3>Qsomo</h3>
                    <ul className="list_Qsomos">
                        <li>Vision</li>
                        <li>Mision</li>
                    </ul>
                </div>
                <div className="contactos"></div>
                <div className="Misi_visi"></div>
            </div>
        </div>
    );
}
export default Pie_pagina;