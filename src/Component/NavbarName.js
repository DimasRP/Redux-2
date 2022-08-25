import React from "react";
import { useSelector } from "react-redux";
const NavbarName = () => {
    const {navReducer} = useSelector((state) => state)
    return(
        <>
        <h1>{navReducer.data.company_name}</h1>
        </>
    )
}

export default NavbarName