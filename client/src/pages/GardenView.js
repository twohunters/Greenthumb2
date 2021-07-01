//slide 15
import React, { useState, useEffect } from "react";

import API from '../utils/API';
import { useParams } from "react-router-dom";



function GardenView(props) {
    const [garden, setGarden] = useState([])

    const { id } = useParams()
    useEffect(() => {
        API.getGarden(id)
            .then(res => { console.log(garden); setGarden(res.data) })

            .catch(err => console.log(err));
    });


    return (
        <div>
            <h1>Plants in your gardeb</h1>
            <p>
                {garden.map((plants) => garden.plants.map(plant =>
                    <li>
                        {garden.plants.plant}
                    </li>
                ))}
            </p>
        </div>
    )
}

export default GardenView;