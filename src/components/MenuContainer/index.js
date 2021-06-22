//all pages
import React,{useState} from "react";
import './menuContainer.css'
import FaqModule from '../FaqModule'
import HowToModule from '../HowtoModule'
function MenuContainer() {
    const[showfaq,setShowfaq] = useState(false)
    const[showhowto,setShowhowto] = useState(false)
    return (
<div class ="sidenav">
  <a href="#" >Create a Garden</a>
  <a href="#" >View All Plants</a>
  <a href="#" >View All Gardens</a>
  <a href="#" >View All Users</a>
  <a href="#" >Add to Our Plant DB</a>
  <a href="#"  onClick={()=> setShowfaq(true)} >FAQs</a>
  <FaqModule onClose={() => setShowfaq(false)} show ={showfaq}/>
  <a href="#" onClick={()=> setShowhowto(true)}>How To</a>
  <HowToModule onClose={() => setShowhowto(false)} show ={showhowto}/>
  
</div>
    )
}
export default MenuContainer ;