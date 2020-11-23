import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ShopNav from './ShopNav';
import ShopItems from './ShopItems';
import ShopCart from './ShopCart';
 
const Shop = () => {

    
    return (
        <>
        <Router>
            <ShopNav />
            <Switch>
                <Route path='/shop' exact><ShopItems /></Route>
                <Route path='/cart'><ShopCart /></Route>
            </Switch>
        </Router>
        </>
    )
}

export default Shop
