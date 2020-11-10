import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/tournament'>Tournament</Link>
            <Link to='/greet'>Greet</Link>
        </div>
    )
}

export default NavBar
