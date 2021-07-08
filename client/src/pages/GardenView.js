import React, { useState, useEffect } from "react";
import API from '../utils/API';
import { useParams, Link } from "react-router-dom";
import './GardenView.css'

const GardenView = () => {
    //setting the inital state of out garden to an empty object
    const [userPlants, setUserPlants] = useState([])
    const [garden, setGarden] = useState({})
    const [userPlantIds, setUserPlantIds]= useState([])
    // const [userPlants, setUserPlants] = useState([])
    const { id } = useParams()
    const userplantIDArray = userPlantIds
    const userPlantArray = userPlants
    useEffect(() => {
        API.getGarden(id)
            .then(res => { 
                 setGarden(res.data);
                setUserPlants(res.data.plants)
                setUserPlantIds(res.data.plant_id)
})
            .catch(err => console.log(err));
            console.log(garden)
            console.log(userPlants)
            console.log(userPlantIds)
    })



    return (
        <div className="gardenContainer">
            <h1>{garden.title}</h1>
            <div className="boxContainer">
                

     
                    {userPlantArray.map((value, index) =>{
                        return (
                            <div key = {index}  className="box">  
                                <h2>{value}</h2>
                            </div>
                        )
                    })}
                
                
            </div>
        </div>
    )
}

export default GardenView;