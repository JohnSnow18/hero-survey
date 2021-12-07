import React from 'react' //rfce
import { Link } from 'react-router-dom'

function Menu({NewOpenClose}) {
    return (
        <div className="grid grid-rows-3 text-center items-center bg-purple-50" onClick={NewOpenClose}>
{/*             <Link className="p-4" to="/">
            Home
            </Link> */}

            <Link className="p-4" to="/sesion">
            Sesión
            </Link>

            <Link className="p-4" to="/register">
            Registro
            </Link>

            <Link className="p-4" to="/contact">
            Contacto
            </Link>
            
        </div>
    )
}

export default Menu;
