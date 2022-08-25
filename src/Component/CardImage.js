import React from "react";
import { useSelector } from 'react-redux/es/exports';

const CardImage = () => {
    const {cardReducer} = useSelector((state) => state)
    return(
        <>
        <img src={cardReducer.data.avatar}/>
        </>
    )
}

export default CardImage