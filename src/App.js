
import React from 'react'
import './App.css';
import Nav from './components/Nav';
import MenuContainer from './components/MenuContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateGarden from './pages/CreateGarden';
import GardenView from './pages/GardenView';
import Plants from './pages/Plants';
import SinglePlant from './pages/SinglePlant';
import Home from './pages/Home';

function App() {
  return (
    <div>
      
     <Nav>
      
    </Nav>
  
     <Router> 
    <Switch> 
<Route exact path='/' component={Home}/>
<Route exact path='/CreateGarden' component={CreateGarden}/>
<Route exact path='/SinglePlant' component={SinglePlant}/>
<Route exact path='/GardenView' component={GardenView}/>
<Route exact path='/Plants' component={Plants}/>
    </Switch> 
    
     </Router> 
     <MenuContainer></MenuContainer>

    </div>

  );
}

export default App;
