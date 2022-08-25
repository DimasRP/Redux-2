import React from "react";
import NavbarImage from "./NavbarImage";
import NavbarName from "./NavbarName";
import "./style.css"

const Navbar = () =>{
    return(
        <>
        <div className="Navbar">
            <NavbarImage/>
            <NavbarName/>
            
        </div>
        </>
    )
}

export default Navbar