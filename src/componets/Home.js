import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to my React projects.</h1>
            <h3>Please,click on the project you want to check</h3>
                        <Link to='/tournament'><button className='block'>Tournament</button></Link>
            <Link to='/greet'><button className='block'>Greet</button></Link>
            <Link to='/shop'><button className='block'>Online Shop</button></Link>
            <Link to='/calculator'><button className='block'>Calculator</button></Link>
        </div>
    )
}

export default Home
