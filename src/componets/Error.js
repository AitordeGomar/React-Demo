import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>Site not found. Please go back to Home</h1>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Error
