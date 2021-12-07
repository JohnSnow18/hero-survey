import React from 'react'
import { Link } from "react-router-dom";

function Navbar({ OpenClose }){
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm text-w border-4 border-light-blue-500 border-opacity-100 rounded-lg">
        <Link to="/" className="pl-8" >
        <img src="https://prod-8f86.kxcdn.com/s1/web-ui/v1/project/ui/images/logo-black.svg" alt="logo" width="80" height="80" className="logo"/>
        </Link>
            
        <div className="px-4 cursor-pointer md:hidden" onClick={OpenClose}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
            </div>

            <div className="pr-8 hidden md:block font-style: italic" >
{/*                 <Link to="/" className="p-4 ">
                    Home
                </Link> */}
                
                <Link to="/sesion" className="p-4 text-3xl">
                Sesión
                </Link>

                <Link to="/register" className="p-4 text-3xl">
                Registro
                </Link>

                <Link to="/contact" className="p-4 text-3xl">
                Contacto
                </Link>

            </div>
    </nav>
    );
}
export default Navbar;
