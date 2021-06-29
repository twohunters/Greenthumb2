import React from "react";
import { Content } from "react-bulma-components";
import { Heading } from "react-bulma-components";
import { Box } from "react-bulma-components";
import API from "../utils/API"
import queryString from 'query-string'
// import user data from user database

const UserFeed = props => {
   const values = queryString.parse(window.location.search)
   console.log(values)
    API.getUser()
    return (
        <Content>
            <Heading>
            <i class="fas fa-user"></i>Your Account
            </Heading>
            <Heading subtitle>
                {/* {props.firstName} {props.lastName} */}
            </Heading>
            <Box>
                <h3>About You</h3>
                {/* <p>{props.userDescription}</p> */}
            </Box>
            <Box>
                <h3>Your Gardens</h3>
                {/* <div>{props.userGardens}</div> */}
            </Box>
        </Content>
    )
}

export default UserFeed;

// SLIDE 12 & 13