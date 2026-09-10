-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-09-2026 a las 03:47:31
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `frutiverso`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_plataforma`
--

CREATE TABLE `imagenes_plataforma` (
  `id` int(11) NOT NULL,
  `nombre_img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `imagen` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `impuesto` decimal(10,2) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `proveedor` varchar(45) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `imagen`, `precio`, `impuesto`, `categoria`, `descripcion`, `proveedor`, `stock`) VALUES
(1, 'Manzana', 'img/manzana.jpg', 1.20, 0.03, 'Frutas y vegetales', 'Manzana roja', 'finca de manzanas', 42),
(2, 'Banana', 'img/banana.jpg', 0.80, 0.40, 'Frutas y vegetales', 'Banana dulce', 'bananera guzman', 6),
(3, 'Naranja', 'img/naranja.jpg', 1.00, 0.60, 'Frutas y vegetales', 'naranja piña', 'finca alina', 10),
(4, 'Fresa', 'img/fresa.jpg', 1.50, 5.00, 'Frutas y vegetales', 'Frezas grandes', 'finxa montaña azul', 8),
(5, 'Uva', 'img/uvas.jpg', 2.00, 0.00, 'Frutas y vegetales', 'uvas dulces con semilla ', 'Finca velleda', 5),
(6, 'Lechuga', 'img/lechuga.jpg', 0.90, 0.00, 'Frutas y vegetales', 'Lechuga fresca', 'finca alina', 9),
(7, 'Tomate', 'img/tomate.jpg', 1.10, 0.00, 'Frutas y vegetales', 'Tomate organiza sin pesticida ', 'finca alina', 10),
(8, 'Zanahoria', 'img/zanahoria.jpg', 0.70, 0.00, 'Frutas y vegetales', 'Zanahoria organiza sin pesticida ', 'finca alina', 5),
(9, 'Brócoli', 'img/brocoli.jpg', 1.30, 0.00, 'Frutas y vegetales', 'Brocoli fresco organico', 'finca alina', 7),
(10, 'Pepino', 'img/pepino.jpg', 0.95, 0.00, 'Frutas y vegetales', 'Pepino Hondureño', 'finca alina', 8);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `imagenes_plataforma`
--
ALTER TABLE `imagenes_plataforma`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `imagenes_plataforma`
--
ALTER TABLE `imagenes_plataforma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
