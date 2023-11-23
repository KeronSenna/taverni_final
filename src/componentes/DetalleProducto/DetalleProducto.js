import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import './DetalleProducto.css';

function DetalleProducto() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProducto(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);
    if (loading) {
        return <div>Cargando...</div>
    } else {
        return (
            <div>
                <NavBar />
                <h1 className="tituloDetalle">Detalle del producto</h1>
                <table className="tablaDetalle">
                    <thead>
                        <th>Nombre del producto</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{producto.title}</td>
                            <td>{producto.description}</td>
                            <td>{producto.price}</td>
                            <td>{producto.rating.count}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DetalleProducto;