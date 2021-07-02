//slide 14
import React, { useState, useEffect } from "react";
import API from '../utils/API'
import { Link, useParams } from "react-router-dom";
import './SinglePlant.css'
//link to this page is api/plants/{id}
const SinglePlant= () => {
    //setting component initial state
    const [plant, setPlant] = useState([])
    //getting the id from the useParams function
    const { id } = useParams()
    useEffect(() => {
        API.getPlant(id)
            .then(res => { console.log(res); setPlant(res.data) })
            .catch(err => console.log(err));
    })

    return (
        <container className="plantContainer">
            <ul>
                <h1>{plant.name}</h1>
                <br></br>
                {/* <img alt="plant" src={plant.img} /> */}

                <li><div className="listTitle">Description </div>{plant.description}</li>
                <li><div className="listTitle">Habit </div>{plant.plant_habit}</li>
                <li><div className="listTitle">Life Cyle </div>{plant.life_cycle}</li>
                <li><div className="listTitle">Sun Requirements </div>{plant.sun_req}</li>
                <li><div className="listTitle">Water Requirements </div>{plant.water_req}</li>
                <li><div className="listTitle">Uses </div>{plant.uses}</li>
                <li><div className="listTitle">Edible Part </div>{plant.edible_parts}</li>
                <li><div className="listTitle">Time To Fruit </div>{plant.time_to_fruit} days</li>
            </ul>

        </container>
    )
}

export default SinglePlant;

// SLIDE 12 & 13