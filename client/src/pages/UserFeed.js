import React, { useState, useEffect } from "react";
import { Content } from "react-bulma-components";
import { Box } from "react-bulma-components";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import queryString from "query-string";
import "./UserFeed.css";

const UserFeed = () => {

    const [user, findUser] = useState()
    const { id } = useParams()
    useEffect(() => {
        API.getUser(id)
            .then(res => { console.log(user); findUser(res.data)})
            .catch(err => console.log(err));
    })

    return (
        <div className="container">
            <Content>
                <Box className="section">
                    <h1 className="title"><span class="material-icons">person</span> Your Account</h1>
                    {/* <h2 className="subtitle">{user.FirstName} {user.LastName}</h2> */}
                </Box>
                <Box>
                    <h1 className="title">About You</h1>
                    <div className="userContent">
                        {/* <p>{user.About}</p> */}
                    </div>
                </Box>
                <Box>
                    <h1 className="title">Your Gardens</h1>
                    <div className="userContent">
                        {/* <p>{user.userGardens}</p> */}
                    </div>
                </Box>
            </Content>
        </div>
    )
}

export default UserFeed;

// SLIDE 12 & 13