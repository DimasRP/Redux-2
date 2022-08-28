import React from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import { useSelector } from "react-redux";

const Cards = () =>{
    const {authReducer} = useSelector((state) => state)
    return(
        <>
            {
            !!authReducer.isLogin == false ? <h1>Belum</h1> : 
            <div className="card"> 
                <CardName/>
                <CardImage/>
            </div>

            }
            

        </>
    )
}

export default Cards