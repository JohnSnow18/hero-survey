import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from "../Header/Navbar";
import Menu from "../../Menu/Menu"

function Layout({ children }) {
    
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const closeMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };
        
        window.addEventListener("resize", closeMenu)

        return () => {
            window.removeEventListener("resize", closeMenu); //limpia lo que hace useEffect
        };

    });

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-screen">
            <Navbar OpenClose={toggleOpen} />
                                {isOpen && <Menu NewOpenClose={toggleOpen}/>}
            {children}
 
        </div>
    )
}
export default Layout;