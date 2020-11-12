import React from 'react';
import './css/ShopItems.css';

const ShopItems = () => {
    return (
        <div>
            <div>ShopItems</div>
            <Item name='Book' price='$6.5'/>
        </div>
    )
}

const Item = (props)=>{
    return(
        <>
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <button>Add to cart</button>
        </>
    )
}

export default ShopItems;
