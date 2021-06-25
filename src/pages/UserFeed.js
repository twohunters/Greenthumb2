import React from "react";
import { Content } from "react-bulma-components";
import { Heading } from "react-bulma-components";
import { Box } from "react-bulma-components";

// import user data from user database

function UserFeed() {

    return (
        <Content>
            <Heading>
                Your Account
            </Heading>
            <Heading subtitle>
                {props.firstName} {props.lastName}
            </Heading>
            <Box>
                <h3>About You</h3>
                <p>{props.userDescription}</p>
            </Box>
            <Box>
                <h3>Your Gardens</h3>
                <div>{props.userGardens}</div>
            </Box>
        </Content>
    )
}

export default UserFeed;

// SLIDE 12 & 13