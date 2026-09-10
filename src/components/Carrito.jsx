import './App.css'

function Carrito({carrito, setCarrito})
{
    const eliminarDelCarrito = (index) =>{
        const nuevo = [...carrito];
        nuevo.splice(index, 1);
        setCarrito(nuevo);
    };

    //sumar todos los precios del carrito
   const totalPagar = () =>{
    return carrito.reduce((total, item) => total + Number(item.precio * item.cantidad),0);
   }
   const total_impuesto = () =>
   {
     return carrito.reduce((total_imp, item) => total_imp + Number(item.impuesto * item.cantidad),0);
   }
   const total_precio = () =>{
     return totalPagar() + total_impuesto();
   }
    return(
        
        <div>
            <h3>Carrito</h3>
            <h2>Lista de compras</h2>
        <label>¿Entrgar pedido adomicilio? 
            <input type='checkbox'/>Si
        </label>
         <div className="flex-horizontal">
         <div>
            <table className="table table-striped table-hover table-bordered align-middle text-center shadow-sm letras_table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Impuesto</th>
                        <th>Sub. Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.length === 0 ?(
                   <tr><td>Carrito Vacio</td></tr>
                 ):(
                    carrito.map((item, index) =>(

                        <tr key={index} >
                            <td><strong>{item.nombre}</strong></td>
                            <td><p> x {item.cantidad}</p></td>
                            <td><p>${(item.precio * item.cantidad).toFixed(2)}</p></td>
                            <td><p>${(item.impuesto * item.cantidad).toFixed(2)}</p></td>
                            <td><p>${((item.impuesto * item.cantidad) + (item.precio * item.cantidad)).toFixed(2)}</p></td>
                            <td><button className="btn btn-danger btn-sm" onClick={() => eliminarDelCarrito(index)}>❌</button>
                            </td>                        
                        </tr>
                    ))
                 )}
            
                </tbody>
            </table>
        </div>
              
        <div>
            <h3 style={{ textAlign: "center", borderBottom: "2px solid rgba(136, 148, 136, 0.884)" }}>
                Total a Pagar</h3>
            <div className="etiquetas_horizontales">
                <h3>Sub. Total: </h3>
                <p>{totalPagar().toFixed(2)}$</p>
            </div>

            <div className="etiquetas_horizontales">
                <h3>Impuesto :</h3>
                <p>{total_impuesto().toFixed(2)}$</p>
            </div>

            <div className="etiquetas_horizontales">
                <h3>Envio:</h3>
                <p>{0.00}$</p>
            </div>

            <div className="etiquetas_horizontales borde-total">
                <h3>Total:</h3>
                <p>{total_precio().toFixed(2)}$</p>
            </div>

            <div className="contenedor-btn-pagar" >
                <button className="btn-pagar" onClick={totalPagar}>Pagar</button></div>
            </div>
         </div>
        
        </div>
    );

}

export default Carrito;