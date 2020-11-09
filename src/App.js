import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './componets/NavBar';
import About from './componets/About';
import Home from './componets/Home';


function App() {
  return (
    <>
    <h1>title</h1>
    <Router>
    <NavBar/>
    <Switch>
      <Route path='/' exact><Home /></Route>
      <Route path='/about'><About /></Route>
      </Switch>
</Router>
    </>
  );
}

export default App;
