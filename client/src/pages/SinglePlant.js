//slide 14
import React,{useState, useEffect}  from "react";
import API from '../utils/API'
import { Link, useParams } from "react-router-dom";
//link to this page is api/plants/{id}
function SinglePlant(props) {
    const [plant, setPlant] = useState([])

    const {id} = useParams()
    useEffect(() => {
      API.getPlant(id)
        .then(res => 
            {console.log(res); console.log(id); setPlant(res.data)})
        .catch(err => console.log(err));
    })
    
    return (
<container className="plantContainer">
        <h1>{plant.name}</h1> 
        <img alt="plant" src={plant.img}/>
        <h2>Description : {plant.description}</h2>
        <h2>Habit : {plant.plant_habit}</h2>
        <h2>Life Cyle : {plant.life_cycle}</h2>
        <h2>Sun Requirements : {plant.sun_req}</h2>
        <h2>Water Requirements : {plant.water_req}</h2>
        <h2>Uses : {plant.uses}</h2>
        <h2>Edible Parts: {plant.edible_parts}</h2>
        <h2>Time To Fruit : {plant.time_to_fruit}</h2>
      

</container>
    )
}

export default SinglePlant;

// SLIDE 12 & 13