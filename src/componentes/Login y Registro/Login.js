import React from "react";
import NavBar from "../navbar/NavBar";
import "./LRestilos.css";

function Login() {
    return (
        <div>
            <NavBar />
            <h1 className="tituloLog">Login</h1>
            <section className="formulario">
                <form action="" name="form_registro">
                    <div><label htmlFor="email">Email </label>
                        <input type="text" id="email_id" name="email" className="input-field" />
                        <div id="error_email" className="error-message"></div>
                    </div>
                    <div><label htmlFor="password">Contraseña </label>
                        <input type="password" id="password_id" name="password" className="input-field" />
                        <div id="error_password" className="error-message"></div>
                    </div>
                    <button type="submit" className="submit-button">Registrarse</button>
                </form>
            </section>
        </div>
    )
}

export default Login;