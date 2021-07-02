//slide 15
import React, { useState, useEffect } from "react";
import API from '../utils/API';
import { useParams, Link } from "react-router-dom";
import { Button } from 'react-bulma-components';



const GardenView =() => {
    //setting the inital state of out garden to an empty object
    const [garden, setGarden] = useState({})
    const [userPlants, setUserPlants] = useState([])
    const { id } = useParams()

    useEffect(() => {
        loadGarden()
    },)

    function loadGarden(){
        API.getGarden(id)
            .then(res => { 
                setGarden(res.data); 
                console.log(garden);
                setUserPlants(res.data.plants);
                console.log(userPlants)
            })
            .catch(err => console.log(err));
    };


    return (
        <div className ="gardenContainer">
            <h1>{garden.title}</h1>
            <div className="boxContainer">
                {userPlants.map(plant =>
                <div className="box">
                    <h2>{plant.name}</h2>
                </div>
                )}
            </div>
        </div>
    )
}

export default GardenView;