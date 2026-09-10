# 🥝 Frutiverso Web App

Aplicación web de comercio electrónico desarrollada con **React, Node.js, Express y MySQL** para la visualización y compra de productos naturales.

El proyecto integra un frontend desarrollado con React y Vite con una API REST encargada de consultar los productos almacenados en una base de datos MySQL.

Actualmente incluye catálogo dinámico, búsqueda y filtrado de productos, vista detallada, control de stock, carrito de compras y cálculo de impuestos.

---

## 🚧 Estado del proyecto

**Proyecto en desarrollo.**

Las principales funcionalidades de catálogo, consulta de productos, carrito de compras e integración entre frontend, API y base de datos ya se encuentran implementadas.

El proyecto continúa evolucionando mientras se incorporan nuevas funcionalidades a la plataforma.

---

## ✨ Funcionalidades implementadas

### 🛍️ Catálogo dinámico

Los productos se obtienen desde una base de datos **MySQL** mediante una API desarrollada con **Node.js y Express**.

La aplicación administra diferentes estados durante la consulta:

- Carga de productos.
- Respuesta correcta.
- Errores de conexión.
- Búsquedas sin resultados.

---

## 🔍 Búsqueda de productos

El catálogo incluye un buscador que permite localizar productos por nombre en tiempo real.

La búsqueda normaliza el texto para facilitar las comparaciones independientemente de:

- Mayúsculas y minúsculas.
- Espacios.
- Acentos.

---

## 🗂️ Filtro por categorías

Los productos pueden filtrarse utilizando diferentes categorías:

- Todos.
- Frutas y vegetales.
- Jabones.
- Fermentados.
- Hierbas.

Los filtros pueden combinarse con la búsqueda por nombre.

---

## 🖼️ Tarjetas de productos

Cada producto se presenta mediante una tarjeta que muestra:

- Imagen.
- Categoría.
- Nombre.
- Precio.
- Acceso a vista detallada.
- Botón para agregar al carrito.

Las tarjetas son generadas dinámicamente a partir de los datos obtenidos desde la API.

---

## 🔎 Vista detallada de producto

Al seleccionar un producto se abre una ventana modal con información adicional:

- Imagen.
- Categoría.
- Nombre.
- Proveedor.
- Descripción.
- Precio.
- Existencias disponibles.
- Selector de cantidad.
- Total de la selección.

La cantidad seleccionada está limitada por el stock disponible del producto.

---

## 🛒 Carrito de compras

Los productos pueden agregarse al carrito desde la tarjeta o desde la vista detallada.

Cuando un producto ya existe en el carrito, la aplicación incrementa su cantidad en lugar de crear registros duplicados.

El carrito permite:

- Visualizar los productos seleccionados.
- Consultar cantidades.
- Eliminar productos.
- Calcular subtotales.
- Calcular impuestos.
- Calcular el total de la compra.

La cantidad de productos del carrito también se muestra dinámicamente en la barra de navegación.

---

## 🏠 Página de inicio

La página principal contiene diferentes secciones para presentar la plataforma:

- Carrusel automático de imágenes.
- Categorías de productos.
- Sección de recetas.
- Información de proveedores.
- Footer con diferentes secciones informativas.

El carrusel cambia automáticamente de imagen mediante un temporizador controlado desde React.

---

## 🧭 Navegación

La aplicación utiliza **React Router** para manejar la navegación entre las diferentes vistas.

Actualmente se encuentran definidas rutas para:

- Inicio.
- Productos.
- Carrito.
- Registro.
- Información de la plataforma.

---

## ⚙️ Configuración del backend

La configuración de la conexión a MySQL se administra mediante variables de entorno.

Dentro de:

```text
frutiverso-api/
````
---

## 🗄️ Base de datos

La información de los productos se almacena en una base de datos **MySQL**.

La tabla principal utilizada actualmente es:

`productos`

Entre los datos gestionados se encuentran:

- ID.
- Nombre.
- Imagen.
- Precio.
- Impuesto.
- Categoría.
- Descripción.
- Proveedor.
- Stock.

Los datos utilizados actualmente corresponden a información de demostración para el desarrollo de la plataforma.

---

## 🔌 API

El backend está desarrollado utilizando:

- Node.js.
- Express.
- MySQL2.
- CORS.
- dotenv.

Actualmente la API incluye un endpoint para consultar el catálogo:

```http
GET /api/productos
```

## 📁 Estructura general

```text
frutiverso-web-app/
│
├── database/
│   └── frutiverso.sql
│
├── frutiverso-api/
│   ├── .env.example
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── public/
├── src/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

