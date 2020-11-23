import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            
            <Link to='/'><button>Home</button></Link>
            <Link to='/tournament'><button>Tournament</button></Link>
            <Link to='/greet'><button>Greet</button></Link>
            <Link to='/shop'><button>Online Shop</button></Link>
            <Link to='/calculator'><button>Calculator</button></Link>
            <hr />
        </div>
    )
}

export default NavBar
