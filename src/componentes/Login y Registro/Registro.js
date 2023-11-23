import React from "react";
import NavBar from "../navbar/NavBar";
import "./LRestilos.css"

function Registro() {
    return (
        <div>
            <NavBar />
            <h1 className="tituloReg">Registro</h1>
            <section className="formulario">
                <form action="" name="form_registro">
                    <div><label htmlFor="nombre">Nombre </label>
                        <input type="text" id="nombre" name="nombre" className="input-field" />
                        <div id="error_nombre" className="error-message"></div>
                    </div>

                    <div><label htmlFor="apellido">Apellido </label>
                        <input type="text" id="apellido" name="apellido" className="input-field" />
                        <div id="error_apellido" className="error-message"></div>
                    </div>

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


export default Registro;