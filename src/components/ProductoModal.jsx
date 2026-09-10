import { useEffect, useState } from "react";
import "./ProductoModal.css";

function ProductoModal({producto,onCerrar,onAgregar}) 
{
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        if (producto) {
            setCantidad(1);
        }
    }, [producto]);

    useEffect(() => {
        if (!producto) {
            return;
        }

        const cerrarConEscape = (event) => {
            if (event.key === "Escape") {
                onCerrar();
            }
        };

        const overflowAnterior = document.body.style.overflow;

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", cerrarConEscape);

        return () => {
            document.body.style.overflow = overflowAnterior;
            document.removeEventListener("keydown", cerrarConEscape);
        };
    }, [producto, onCerrar]);

    if (!producto) {
        return null;
    }

    const precio = Number(producto.precio || 0);
    const stock = Number(producto.stock || 0);
    const agotado = stock <= 0;

    const disminuirCantidad = () => {
        setCantidad((cantidadActual) =>
            Math.max(1, cantidadActual - 1)
        );
    };

    const aumentarCantidad = () => {
        setCantidad((cantidadActual) =>
            Math.min(stock, cantidadActual + 1)
        );
    };

    const cambiarCantidad = (event) => {
        const nuevaCantidad = Number(event.target.value);

        if (Number.isNaN(nuevaCantidad)) {
            return;
        }

        setCantidad(
            Math.max(1, Math.min(stock, nuevaCantidad))
        );
    };

    const agregarProducto = () => {
        if (agotado) {
            return;
        }

        onAgregar(producto, cantidad);
        onCerrar();
    };

    return (
        <div
            className="producto-modal-fondo"
            onClick={onCerrar}
            role="presentation"
        >
            <article
                className="producto-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="producto-modal-titulo"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="producto-modal-cerrar"
                    onClick={onCerrar}
                    aria-label="Cerrar vista previa"
                >
                    ×
                </button>

                <div className="producto-modal-imagen-contenedor">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="producto-modal-imagen"
                    />

                    <span className="producto-modal-categoria">
                        {producto.categoria}
                    </span>
                </div>

                <div className="producto-modal-informacion">
                    <span className="producto-modal-etiqueta">
                        Producto natural
                    </span>

                    <h2
                        id="producto-modal-titulo"
                        className="producto-modal-titulo"
                    >
                        {producto.nombre}
                    </h2>

                    <div className="producto-modal-proveedor">
                        <span>Proveedor</span>

                        <strong>
                            {producto.proveedor ||
                                "Proveedor no especificado"}
                        </strong>
                    </div>

                    <p className="producto-modal-descripcion">
                        {producto.descripcion ||
                            "Este producto todavía no tiene una descripción disponible."}
                    </p>

                    <div className="producto-modal-precio-contenedor">
                        <div>
                            <span className="producto-modal-precio-texto">
                                Precio
                            </span>

                            <strong className="producto-modal-precio">
                                ${precio.toFixed(2)}
                            </strong>
                        </div>

                        <div className="producto-modal-existencia">
                            {agotado ? (
                                <span className="producto-agotado">
                                    Agotado
                                </span>
                            ) : (
                                <span>
                                    {stock} disponibles
                                </span>
                            )}
                        </div>
                    </div>

                    {!agotado && (
                        <div className="producto-modal-cantidad-fila">
                            <div>
                                <span className="producto-modal-cantidad-titulo">
                                    Cantidad
                                </span>

                                <div className="producto-modal-cantidad">
                                    <button
                                        type="button"
                                        onClick={disminuirCantidad}
                                        disabled={cantidad <= 1}
                                        aria-label="Disminuir cantidad"
                                    >
                                        −
                                    </button>

                                    <input
                                        type="number"
                                        min="1"
                                        max={stock}
                                        value={cantidad}
                                        onChange={cambiarCantidad}
                                        aria-label="Cantidad del producto"
                                    />

                                    <button
                                        type="button"
                                        onClick={aumentarCantidad}
                                        disabled={cantidad >= stock}
                                        aria-label="Aumentar cantidad"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="producto-modal-total">
                                <span>Total</span>

                                <strong>
                                    ${(precio * cantidad).toFixed(2)}
                                </strong>
                            </div>
                        </div>
                    )}

                    <button
                        type="button"
                        className="producto-modal-agregar"
                        onClick={agregarProducto}
                        disabled={agotado}
                    >
                        <span aria-hidden="true">🛒</span>

                        {agotado
                            ? "Producto agotado"
                            : "Agregar al carrito"}
                    </button>
                </div>
            </article>
        </div>
    );
}

export default ProductoModal;