import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './componets/NavBar';
import Greet from './componets/Greet';
import Tournament from './componets/Tournament';
import Home from './componets/Home';
import Error from './componets/Error';
import Shop from './componets/shop/Shop';
import Calculator from './componets/Calculator';
import Keyboard from './componets/Keyboard';

import '../src/App.css';


function App() {
  return (
    <>
    <h1>Some React projects</h1>
    <Router>
    <NavBar/>
    <Switch>
      <Route path='/' exact><Home /></Route>
      <Route path='/tournament'><Tournament /></Route>
      <Route path='/greet'><Greet /></Route>
      <Route path='/shop'><Shop /></Route>
      <Route path='/calculator'><Calculator/></Route>
      <Route path='/keyboard'><Keyboard/></Route>
      <Route path='*'><Error /></Route>
      </Switch>
</Router>

    </>
  );
}

export default App;
