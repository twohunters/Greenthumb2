//slide 15
import React, { useState, useEffect } from "react";
import API from '../utils/API';
import { useParams, Link } from "react-router-dom";
import './GardenView.css'
//Test user id = 60de4d44a0805e8184f63259
const GardenView = () => {
    //This gardenPlant
    const [gardenPlants, setGardenPlants] = useState([{_id:'', name:''}])
    const [garden, setGarden] = useState({ title: '', user_id: '', plants: [] })

    const { id } = useParams()
    //setting the value of garden.plants[i] into an empty array
    let gardenPlantArray = gardenPlants
    useEffect(() => {
        API.getGarden(id)

            .then(res => {
                setGarden(res.data);
                setGardenPlants(res.data.plants);
            })
            .catch(err => console.log(err));
        console.log(garden)
        console.log(gardenPlants)
        console.log(id)
    });

    const [allPlants, setAllPlants] = useState([])

    useEffect(() => {
        API.getPlants()
            .then(res => setAllPlants(res.data)
            )
            .catch(err => console.log(err));
        console.log(allPlants)
    });



    return (
        <div className="gardenContainer">
            <h1>{garden.title}</h1>
            <div className="boxContainer">

                {gardenPlantArray.map((value, index) => {
                    return (
                        <Link to="/">
                            <div
                                key={index}
                                className="box"
                                id>
                                <h2>{value}</h2>
                            </div>
                        </Link>
                    )
                })}


            </div>
        </div>
    )
}

export default GardenView;