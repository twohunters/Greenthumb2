import React from "react";
import { Content } from "react-bulma-components";
import { Box } from "react-bulma-components";
import API from "../utils/API";
import queryString from "query-string";
import "./UserFeed.css";

const UserFeed = () => {
    const values = queryString.parse(window.location.search)
    console.log(values)
    API.getUser()
    return (
        <div className="container">
            <Content>
                <Box className="section">
                    <h1 className="title"><span class="material-icons">person</span> Your Account</h1>
                    <h2 className="subtitle">{/* {props.firstName} {props.lastName} */}</h2>
                </Box>
                <Box>
                    <h1 className="title">About You</h1>
                    <div className="userContent">
                        {/* <p>{props.userDescription}</p> */}
                    </div>
                </Box>
                <Box>
                    <h1 className="title">Your Gardens</h1>
                    <div className="userContent">
                        {/* <p>{props.userGardens}</p> */}
                    </div>
                </Box>
            </Content>
        </div>
    )
}

export default UserFeed;

// SLIDE 12 & 13