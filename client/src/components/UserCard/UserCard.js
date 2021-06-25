import React from "react";
import { Card } from "react-bulma-components";

const { Header, Title, Content } = Card;

function UserCard(props) {
    return (
        <Card>
            <Card.Header>
                <Card.Header.Title>
                {props.firstName} {props.lastName}
                </Card.Header.Title>
            </Card.Header>
            <Card.Content>
                {props.userGardens}
            </Card.Content>
        </Card>
    )
}

export default UserCard;

// SLIDE 11

// write out code to import user information from user database