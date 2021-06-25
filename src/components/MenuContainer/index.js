//all pages
import React,{useState} from "react";
import './menuContainer.css'
import FaqModule from '../FaqModule'
import { NavLink } from 'react-router-dom'
import HowToModule from '../HowtoModule'
import { BrowserRouter as Router, Route } from "react-router-dom"
//import GardenView from '../GardenView'

function MenuContainer() {
    const[showfaq,setShowfaq] = useState(false)
    const[showhowto,setShowhowto] = useState(false)
    return (
      <Router>
<div class ="sidenav">
  <a href="/CreateGarden" >Create a Garden</a>
  <a href="/Plants" >View All Plants</a>
  <a href="#" >View All Gardens</a>
  <a href="#" >View All Users</a>
  <a href="PlantForm" >Add to Our Plant DB</a>
  <a href="#"  onClick={()=> setShowfaq(true)} >FAQs</a>
  <FaqModule onClose={() => setShowfaq(false)} show ={showfaq}/>
  <a href="#" onClick={()=> setShowhowto(true)}>How To</a>
  <HowToModule onClose={() => setShowhowto(false)} show ={showhowto}/>
  
</div>
</Router>
    )
}
export default MenuContainer ;