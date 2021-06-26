
import React from 'react'
import './App.css';
import Nav from './components/Nav';
// import MenuContainer from ./
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateGarden from './pages/CreateGarden';
import GardenView from './pages/GardenView';
import Plants from './pages/Plants';
import SinglePlant from './pages/SinglePlant';
import Home from './pages/Home';
import MenuContainer from './components/MenuContainer'

function App() {
  return (
    <div>
      <Router>
     <Nav>
    </Nav>
    <MenuContainer/>
    <Switch>
<Route exact path='/' component={Home}/>
<Route exact path='/CreateGarden' component={CreateGarden}/>
<Route exact path='/SinglePlant' component={SinglePlant}/>
<Route exact path='/GardenView' component={GardenView}/>
<Route exact path='/Plants' component={Plants}/>
    </Switch>
    
    </Router>

    </div>

  );
}

export default App;
