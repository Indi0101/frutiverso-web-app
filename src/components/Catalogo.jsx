import { useEffect,useMemo ,useState } from "react";
import ProductoCard from "./ProductoCard";
import ProductoModal from "./ProductoModal";
import "./Catalago.css";
   

const categorias = ["Todos","Frutas y vegetales","Jabones","Fermentados","Hierbas"];
function Catalogo({carrito, setCarrito})
{
    const [productos, setProductos] = useState([]);
    const [categoriaActiva, setCategoriaActiva] = useState("Todos");
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState("");
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);


    useEffect(()=>{
        fetch("http://localhost:5000/api/productos")
         .then((res) => {
                if (!res.ok) {
                    throw new Error("No se pudieron obtener los productos");
                }

                return res.json();
            })
        .then((data) =>{ setProductos(data);
                        setError("");
                    })

        .catch((err) =>{ console.error("Error al obtener productos:", err)
                        setError("No se puede cargar el catalogo");
             })
        .finally(() => {
                setCargando(false);
            });
    }, []);

   const agregarAlCarrito = (producto, cantidad = 1) => {
    const cantidadAgregar = Number(cantidad) || 1;

    setCarrito((carritoActual) => {
        const existe = carritoActual.find(
            (item) => item.id === producto.id
        );

        if (existe) {
            return carritoActual.map((item) =>
                item.id === producto.id
                    ? {
                        ...item,
                        cantidad:
                            item.cantidad + cantidadAgregar
                    }
                    : item
            );
        }

        return [
            ...carritoActual,
            {
                ...producto,
                cantidad: cantidadAgregar
            }
        ];
    });
};

    const normalizarTexto = (texto = "") => {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
    };

    const productosFiltrados = useMemo(() => {
        const textoBuscado = normalizarTexto(busqueda);

        return productos.filter((producto) => {
                const coincideCategoria =
                    categoriaActiva === "Todos" ||
                    normalizarTexto(producto.categoria) ===
                        normalizarTexto(categoriaActiva);

                const coincideNombre =
                    normalizarTexto(producto.nombre).includes(textoBuscado);

                return coincideCategoria && coincideNombre;
            });
                
    }, [productos, categoriaActiva,busqueda]);
   
    return(
        <main className="catalogo">
            <section className="catalogo-contenedor">

                <header className="catalogo-encabezado">
                    <span className="catalogo-etiqueta">
                        Productos naturales
                    </span>

                    <h1 className="catalogo-titulo">
                        Catálogo de Frutiverso
                    </h1>

                    <p className="catalogo-descripcion">
                        Encuentra productos naturales, frescos y elaborados
                        cuidadosamente.
                    </p>
                </header>
                <div className="catalogo-buscador">
                        <span className="catalogo-buscador-icono" aria-hidden="true">
                            🔍
                        </span>

                        <input
                            type="search"
                            className="catalogo-buscador-input"
                            placeholder="Buscar producto por nombre..."
                            value={busqueda}
                            onChange={(event) => setBusqueda(event.target.value)}
                            aria-label="Buscar producto por nombre"
                        />

                        {busqueda && (
                            <button
                                type="button"
                                className="catalogo-buscador-limpiar"
                                onClick={() => setBusqueda("")}
                                aria-label="Limpiar búsqueda"
                            >
                                ×
                            </button>
                        )}
                </div>
                <nav
                    className="catalogo-categorias"
                    aria-label="Categorías del catálogo"
                >
                    {categorias.map((categoria) => (
                        <button
                            key={categoria}
                            type="button"
                            className={
                                categoriaActiva === categoria
                                    ? "categoria-btn categoria-btn-activa"
                                    : "categoria-btn"
                            }
                            onClick={() => setCategoriaActiva(categoria)}
                            aria-pressed={categoriaActiva === categoria}
                        >
                            {categoria}
                        </button>
                    ))}
                </nav>

                {!cargando && !error && (
                    <div className="catalogo-resultados">
                        <span>
                            {productosFiltrados.length}
                            {" "}
                            {productosFiltrados.length === 1
                                ? "producto"
                                : "productos"}
                        </span>
                    </div>
                )}

                {cargando && (
                    <div className="catalogo-mensaje">
                        <div
                            className="spinner-border text-success"
                            role="status"
                        >
                            <span className="visually-hidden">
                                Cargando productos...
                            </span>
                        </div>

                        <p>Cargando productos...</p>
                    </div>
                )}

                {error && (
                    <div className="catalogo-mensaje catalogo-error">
                        <h3>No pudimos cargar los productos</h3>
                        <p>{error}</p>
                    </div>
                )}

                
                {!cargando && !error && productosFiltrados.length > 0 && (
                        <div className="row g-4">
                            {productosFiltrados.map((prod) => (
                                <div
                                    key={prod.id}
                                    className="col-12 col-sm-6 col-lg-4 col-xl-3"
                                >
                                    <ProductoCard
                                        nombre={prod.nombre}
                                        precio={prod.precio}
                                        imagen={prod.imagen}
                                        id={prod.id}
                                        impuesto={prod.impuesto}
                                        categoria={prod.categoria}
                                        produc_sele={agregarAlCarrito}
                                        onVerDetalle={() =>
                                            setProductoSeleccionado(prod)
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                
                {!cargando && !error && productosFiltrados.length === 0 && (
                    <div className="catalogo-mensaje">
                        <span className="catalogo-vacio-icono">
                            🔍
                        </span>

                        <h3>No encontramos productos</h3>

                        <p>
                            {busqueda
                                ? `No hay resultados para "${busqueda}" en esta categoría.`
                                : "Todavía no existen productos registrados en esta categoría."
                            }
                        </p>

                        {busqueda && (
                            <button
                                type="button"
                                className="categoria-btn categoria-btn-activa mt-3"
                                onClick={() => setBusqueda("")}
                            >
                                Limpiar búsqueda
                            </button>
                        )}
                    </div>
                )}

            </section>
        </main>
    )
}

export default Catalogo;
