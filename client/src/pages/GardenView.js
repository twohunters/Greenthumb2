//slide 15
import React, {useState} from "react";
import { Card } from "react-bulma-components";
const {Image} = Card;



function GardenView(props){
    return(
        //create a for loop to render a card + card image for each plant in the users garden
        <Card>
            <Card.Image
            size="4by3"
            alt={props.garden.plantName}
        src={props.imageSrc}
        // if (props.garden.plantName === props.garden.plantName[i]){
            //counter
        
      />
        </Card>
    )
}

export default GardenView