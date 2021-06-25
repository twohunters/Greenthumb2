//slide 15
import React from "react";
import { Card } from "react-bulma-components";
const {Image} = Card;

function GardenView(props){
    return(
        <Card>
            <Card.Image
            size="4by3"
        src={props.imageSrc}
      />
        </Card>
    )
}
export default GardenView