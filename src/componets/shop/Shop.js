import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ShopNav from './ShopNav';
import ShopItems from './ShopItems';
 
const Shop = () => {
    return (
        <>
        <Router>
            <ShopNav />
            <Switch>
                <Route path='/'><ShopItems /></Route>
            </Switch>
        </Router>
        </>
    )
}

export default Shop
