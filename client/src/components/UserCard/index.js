import React from "react";
import "./style.css";
import { Card } from "react-bulma-components";

const { Header, Title, Content } = Card;

function UserCard(props) {
    return (
        <Container>
            <Card>
                <Card.Header>
                    <Card.Header.Title>
                    <i class="fas fa-user"></i>{props.firstName} {props.lastName}
                    </Card.Header.Title>
                </Card.Header>
                <Card.Content>
                    {props.userGardens}
                </Card.Content>
            </Card>
        </Container>
    )
}

export default UserCard;

// SLIDE 11

// write out code to import user information from user database