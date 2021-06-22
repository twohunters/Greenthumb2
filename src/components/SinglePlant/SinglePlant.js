//slide 14
import React from "react";

function SinglePlant(props) {
    return (
<container className="plantContainer">
        <img alt="plant" src={props.img}/>
        <h2>Description : {props.description}</h2>
        <h2>Habit : {props.habit}</h2>
        <h2>Life Cyle : {props.lifeCyle}</h2>
        <h2>Sun Requirements : {props.sunRequirements}</h2>
        <h2>Water Requirements : {props.waterRequirements}</h2>
        <h2>Uses : {props.uses}</h2>
        <h2>Edible Parts: {props.edibleParts}</h2>
        <h2>Time To Fruit : {props.timeToFruit}</h2>
        <h2>Recipes : {props.recipes}</h2>

</container>
    )
}

export default SinglePlant;

// SLIDE 12 & 13