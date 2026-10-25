import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import logo from './assets/kwik-e-mart.png';
import apu from './assets/apu.webp';

const productos = [
  { nombre: 'Squishee', categoria: 'Bebidas', precio: 1500, stock: 30 },
  { nombre: 'Rosquilla glaseada', categoria: 'Panadería', precio: 900, stock: 24 },
  { nombre: "Cereal Krusty-O’s", categoria: 'Abarrotes', precio: 3000, stock: 15 },
  { nombre: 'Buzz Cola', categoria: 'Bebidas', precio: 1200, stock: 20 },
  { nombre: 'Duff', categoria: 'Cervezas', precio: 1800, stock: 18 },
  { nombre: 'Hot dog', categoria: 'Comida preparada', precio: 2000, stock: 16 },
];

const formatoPrecio = new Intl.NumberFormat('es-CL', {
  style: 'currency', currency: 'CLP', maximumFractionDigits: 0,
});

function Inicio() {
  return (
    <>
      <section className="bienvenida" aria-labelledby="titulo-inicio">
        <div className="bienvenida-texto">
          <span className="etiqueta">TU MINIMERCADO EN SPRINGFIELD</span>
          <h1 id="titulo-inicio">Lo de todos los días.<br /><span>Con sabor a Springfield.</span></h1>
          <p>Desde un Squishee bien frío hasta algo rico para el camino. Tus favoritos te esperan en Kwik-E-Mart.</p>
          <Link className="boton" to="/nuestras-tiendas">Visita nuestra tienda <span aria-hidden="true">→</span></Link>
          <p className="detalle">Abierto las 24 horas · Todos los días</p>
        </div>
        <div className="apu-contenedor">
          <span className="saludo">¡Bienvenido!</span>
          <img className="apu" src={apu} alt="Apu dando la bienvenida con las manos juntas" />
        </div>
      </section>
      <section className="inventario" aria-labelledby="titulo-inventario">
        <div className="titulo-seccion">
          <div><span className="etiqueta">EN NUESTRAS ESTANTERÍAS</span><h2 id="titulo-inventario">Inventario de productos</h2></div>
          <span className="cantidad">{productos.length} productos</span>
        </div>
        <p>Consulta nuestros productos y sus existencias.</p>
        <div className="tabla-contenedor">
          <table>
            <caption className="solo-lectores">Precios y stock de productos de Kwik-E-Mart</caption>
            <thead><tr><th scope="col">Producto</th><th scope="col">Categoría</th><th scope="col">Precio</th><th scope="col">Stock</th></tr></thead>
            <tbody>{productos.map((producto) => (
              <tr key={producto.nombre}>
                <th scope="row">{producto.nombre}</th><td>{producto.categoria}</td>
                <td>{formatoPrecio.format(producto.precio)}</td><td><span className="stock">{producto.stock} unidades</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function QuienesSomos() {
  return (
    <section className="pagina" aria-labelledby="titulo-nosotros">
      <span className="etiqueta">PARTE DEL BARRIO</span>
      <h1 id="titulo-nosotros">Quiénes somos</h1>
      <p className="introduccion">Una parada cotidiana para los vecinos de Springfield.</p>
      <div className="contenido-pagina">
        <h2>Bienvenido a Kwik-E-Mart</h2>
        <p>Somos un minimercado de barrio donde encontrarás bebidas, golosinas y productos esenciales para tus compras diarias.</p>
        <p>Con Apu al frente de la atención, buscamos que cada visita sea cercana y sencilla. Ya sea para empezar el día o para un antojo de medianoche, nuestras puertas están abiertas.</p>
        <h2>Los clásicos de siempre</h2>
        <p>Un Squishee, una Buzz Cola o unos Krusty-O’s: pequeños favoritos que forman parte de la vida en Springfield.</p>
        <Link className="enlace" to="/">Ver nuestros productos →</Link>
      </div>
    </section>
  );
}

function NuestrasTiendas() {
  return (
    <section className="pagina" aria-labelledby="titulo-tiendas">
      <span className="etiqueta">SIEMPRE CERCA</span>
      <h1 id="titulo-tiendas">Nuestras tiendas</h1>
      <p className="introduccion">Tu próxima parada está en Springfield.</p>
      <article className="tienda">
        <div className="tienda-cabecera"><span className="etiqueta">SUCURSAL 01</span><span className="stock">Abierto las 24 horas</span></div>
        <h2>Kwik-E-Mart Springfield</h2>
        <dl><div><dt>Dirección</dt><dd>Avenida Siempreviva 100, Springfield</dd></div><div><dt>Horario</dt><dd>Lunes a domingo, las 24 horas</dd></div><div><dt>Atención</dt><dd>Compras presenciales</dd></div></dl>
      </article>
    </section>
  );
}

function NoEncontrado() {
  return <section className="pagina"><span className="etiqueta">404</span><h1>Página no encontrada</h1><p>La página que buscas no está disponible.</p><Link className="boton" to="/">Volver al inicio</Link></section>;
}

export default function App() {
  return (
    <BrowserRouter>
      <a className="saltar" href="#contenido">Saltar al contenido</a>
      <header className="encabezado">
        <Link to="/" aria-label="Kwik-E-Mart, inicio"><img src={logo} alt="Kwik-E-Mart" /></Link>
        <span className="horario">SPRINGFIELD <span aria-hidden="true">·</span> ABIERTO 24/7</span>
      </header>
      <main id="contenido"><Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes></main>
      <footer className="pie">Kwik-E-Mart · Springfield <span>Siempre hay algo para ti.</span></footer>
      <nav className="menu-inferior" aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/quienes-somos">Quiénes somos</NavLink>
        <NavLink to="/nuestras-tiendas">Nuestras tiendas</NavLink>
      </nav>
    </BrowserRouter>
  );
}
