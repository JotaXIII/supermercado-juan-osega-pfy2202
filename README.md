# Kwik-E-Mart

Sitio de supermercado desarrollado con React, JavaScript, CSS y React Router.

## Ejecutar

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build
npm run preview
```

## Páginas

- `/`: bienvenida e inventario de seis productos.
- `/quienes-somos`: presentación del minimercado.
- `/nuestras-tiendas`: dirección y horario de la sucursal.

El menú inferior utiliza React Router para navegar sin recargar la página. Las rutas desconocidas muestran una página de error con enlace al inicio.

Los productos, precios, existencias y dirección son ficticios. Los personajes y marcas de Los Simpson pertenecen a sus respectivos titulares.

Para desplegar en un servidor estático con BrowserRouter, configurar las rutas para que devuelvan `index.html`.
