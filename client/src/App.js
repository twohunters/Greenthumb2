
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
import UserFeed from './pages/UserFeed';
import AddPlant from './pages/AddPlant'
import GardenListView from './pages/GardenListview'
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
<Route exact path='/SinglePlant/:id' component={SinglePlant}/>
<Route exact path='/GardenView/:id' component={GardenView}/>
<Route exact path='/Plants' component={Plants}/>
<Route exact path='/UserFeed/:id' component={UserFeed}/>
<Route exact path='/addplant' component={AddPlant}/>
<Route exact path='/gardenlistview' component={GardenListView}/>
    </Switch>
    
    </Router>

    </div>

  );
}

export default App;
