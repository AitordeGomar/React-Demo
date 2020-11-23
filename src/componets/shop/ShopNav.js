import React from 'react';
import {Link} from 'react-router-dom';
import './css/ShopNav.css';

const ShopNav = () => {
    return (
        <>
        
        {/* <Link to='/'><button>Home (Shop)</button></Link> */}
        <Link to='/cart'><p><img id='cart' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F126%2F126083.png&f=1&nofb=1' alt='cart area'/></p> </Link>
        </>
    )
}

export default ShopNav
