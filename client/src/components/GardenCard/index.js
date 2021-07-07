//slide 10
import React,{useState,useEffect} from "react";
import {Card} from "react-bulma-components";
import API from '../../utils/API'
const { Header, Title, Content } = Card;


const GardenCard = props => {
    const [gardens,setGardens]=useState([])
    useEffect(()=>{
        getGardens()
    },[])
//Gets all gardens 
    function getGardens(){
        API.getGardens()
    
         .then(res => {
             console.log(res); setGardens(res.data)
            }
            ).catch(err=> console.log(err))

    }
    return(
        <div> {gardens.length ?(
            <Content>
            {gardens.map(garden=>(
                <div>
            <Card.Header>
                <Card.Header.Title>
                    {garden.title}
                </Card.Header.Title>
            </Card.Header>
            <Card.Content>
                {garden.gardenPlants}
                {/* do we want a list of plants or maybe the date created */}
            </Card.Content>
            </div>
            ))}
 </Content>
        ):(<h3>No results to display</h3>)}
       </div>
    
    )
}

export default GardenCard;