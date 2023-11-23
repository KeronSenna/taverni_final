import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navBar">
            <Link to="/listaProductos">Lista Productos</Link>
            {' '}
            <Link to="/login">Login</Link>
            {' '}
            <Link to="/registro">Registro</Link>
        </nav>)
}

export default NavBar;