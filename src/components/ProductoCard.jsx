function ProductoCard({
    nombre,
    imagen,
    precio,
    id,
    produc_sele,
    impuesto,
    categoria,
    onVerDetalle
}) {
    const agregarProducto = () => {
        produc_sele(
            {
                id,
                imagen,
                nombre,
                precio,
                impuesto,
                categoria
            },
            1
        );
    };

    return (
        <article className="card shadow-sm h-100 border-0 rounded-4 overflow-hidden">

            {/* Al presionar la imagen se abre la vista previa */}
            <button
                type="button"
                className="producto-imagen-boton"
                onClick={onVerDetalle}
                aria-label={`Ver información de ${nombre}`}
            >
                <img
                    src={imagen}
                    className="card-img-top producto-card-imagen"
                    alt={nombre}
                />

                <span className="producto-ver-detalle">
                    Ver producto
                </span>
            </button>

            <div className="card-body d-flex flex-column p-4">
                <small className="text-success fw-semibold mb-2">
                    {categoria}
                </small>

                <h5 className="card-title">
                    {nombre}
                </h5>

                <p className="text-success fw-bold fs-5 mt-auto">
                    ${Number(precio || 0).toFixed(2)}
                </p>

                {/* Este botón agrega una unidad directamente */}
                <button
                    type="button"
                    className="btn btn-success rounded-pill"
                    onClick={agregarProducto}
                >
                    Agregar al carrito
                </button>
            </div>

        </article>
    );
}

export default ProductoCard;