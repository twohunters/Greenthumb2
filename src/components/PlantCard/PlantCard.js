import React from "react";
import { Card } from "react-bulma-components";

const { Header, Title, Content } = Card;

function PlantCard(props) {
    return (
        <Card>
            <Card.Header>
                <Card.Header.Title>
                    {props.plantName}
                </Card.Header.Title>
            </Card.Header>
            <Card.Content>
                {props.plantDescription}
            </Card.Content>
        </Card>
    )
}

export default PlantCard;

// SLIDE 9

// write out code to import plant information from plant database