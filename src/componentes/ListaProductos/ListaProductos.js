import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import './ListaProductos.css';

function ListaProductos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProductos(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
            })
    }, []);

    return (
        <div>
            <NavBar />
            <h1 className="tituloLista">Listado de productos</h1>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <ul className="productos-lista">
                    {productos.map(producto => (
                        <li key={producto.id} className="producto-item">
                            <h3>{producto.title}</h3>
                            <p>Precio: ${producto.price}</p>
                            <Link to={`/DetalleProducto/${producto.id}`}>Ver Detalle</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListaProductos;