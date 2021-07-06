import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bulma-components";
import { Block } from "react-bulma-components";
import API from "../utils/API";
import "./UserFeed.css";

const UserFeed = () => {
    const [user, setUser] = useState({
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        about: "",
        Garden_id: []
    })
    const { id } = useParams()
    useEffect(() => {
        console.log(id)
        API.getUser(id)
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div className="container">
            <Card>
                <Block>
                    <h1 className="card-header-title"><span class="material-icons">person</span> Your Account</h1>
                </Block>
                <Block>
                    <h1 className="title">{user.firstName} {user.lastName}</h1>
                </Block>
                <Block>
                    <h1 className="subtitle">About You</h1>
                    <div className="userContent">
                        <p>{user.about}</p>
                    </div>
                </Block>
                <Block>
                    <h1 className="subtitle">Your Gardens</h1>
                    <div className="userContent">
                        <p>{user.Garden_id}</p>
                    </div>
                </Block>
            </Card>
        </div>
    )
}

export default UserFeed;

// SLIDE 12 & 13


        // _id:'',
        // firstName:'',
        // lastName:'',
        // email:'',
        // password: '',
        // about: '',
        // Garden_id: []