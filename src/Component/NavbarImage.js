import React from "react";
import { useSelector } from 'react-redux/es/exports';

const NavbarImage = () => {
    const {navReducer} = useSelector((state) => state)
    return(
        <>
        <img src={navReducer.data.logo}/>
        </>
    )
}

export default NavbarImage