import React, { useState, useEffect } from "react";
import { Content } from "react-bulma-components";
import GardenCard from "../components/GardenCard";
import API from "../../src/utils/API";

const ViewAllGardens = (props) => {
    const [gardens, setGardens] = useState([])
    useEffect(() => {
        getGardens()
    }, [])
    function getGardens() {
        API.getGardens()
            .then(res => setGardens(res.data))
            .catch(err => console.log(err))

    }
    return (
        <div>
            {gardens.length ? (
                <Content>
                    {gardens.map(garden => (
                        <div>
                            <GardenCard />
                        </div>
                    ))
                    }
                </Content>


            ) : (<h3>No results to display</h3>)}
        </div>
    )
}

export default ViewAllGardens;
