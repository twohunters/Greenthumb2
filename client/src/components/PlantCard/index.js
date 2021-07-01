import React from "react";
import "./style.css";
import { Card } from "react-bulma-components";

const { Header, Title, Content } = Card;

function PlantCard(props) {
    return (
        <div>
            <Card>
                <Card.Header>
                    <Card.Header.Title>
                    <span class="material-icons">yard</span> {props.plantName}
                    </Card.Header.Title>
                </Card.Header>
                <Card.Content>
                    {props.plantDescription}
                </Card.Content>
            </Card>
        </div>
    )
}

export default PlantCard;

// SLIDE 9

// write out code to import plant information from plant database