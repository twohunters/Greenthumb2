import React, { useState, useEffect } from "react";
import API from '../utils/API';
import { useParams, Link } from "react-router-dom";
import './GardenView.css'

const GardenView = () => {
    //setting the inital state of out garden to an empty object
    const [userPlants, setUserPlants] = useState([])
    const [garden, setGarden] = useState({})
    // const [userPlants, setUserPlants] = useState([])
    const { id } = useParams()
    const userPlantArray = userPlants
    useEffect(() => {
        API.getGarden(id)
            .then(res => { 
                 setGarden(res.data);
                setUserPlants(res.data.plants)
})
            .catch(err => console.log(err));
            console.log(garden)
            console.log(userPlants)
    })



    return (
        <div className="gardenContainer">
            <h1>{garden.title}</h1>
            <div className="boxContainer">
                
                    {userPlantArray.map((value, index) =>{
                        return (
                            <Link to="/">
                            <div key = {index} className="box">  
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