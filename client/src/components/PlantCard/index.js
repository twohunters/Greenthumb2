import React, {useState, useEffect} from "react";
import "./style.css";
import { Card } from "react-bulma-components";
import API from '../../utils/API'

const { Header, Title, Content } = Card;

const PlantCard = props => {
    const [plants,setPlants]=useState([])
    useEffect(()=>{
        getPlants()
    },[])
    function getPlants(){
        API.getPlants()
    
         .then(res => {
             console.log(res); setPlants(res.data)
            }
            ).catch(err=> console.log(err))

    }
    return (
        <div>
            {plants.length ?(
                <Content>
                    {plants.map(plant=>(
                        <Card>
                <Card.Header>
                    <Card.Header.Title>
                    <span class="material-icons">yard</span> {plant.name}
                    </Card.Header.Title>
                </Card.Header>
                <Card.Content>
                    {plant.description}
                </Card.Content>
            </Card>
            ))}
            </Content>
            ):(<h3>No results to display</h3>)}
        </div>
        )}

export default PlantCard;

// SLIDE 9

// write out code to import plant information from plant database