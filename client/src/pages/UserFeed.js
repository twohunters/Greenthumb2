import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bulma-components";
import { Block } from "react-bulma-components";
import { Content } from "react-bulma-components";
import API from "../utils/API";
import "./UserFeed.css";
const UserFeed = () => {
    const [user, setUser] = useState({})
    const [gardens, setGardens] = useState([])
    const { id } = useParams()
    // const gardenName = gardens.title

    useEffect(() => {

        getUser()
        getGardens()
        console.log(gardens)

    }, [])
    function getUser() {
        API.getUser(id)
            .then(res => setUser(res.data))
            .catch(err => console.log(err))

    }
    function getGardens() {
        // const userId = localStorage.getItem("id");

        API.findGardens({ user_id: id })
            .then(res => { console.log(res.data); setGardens(res.data) })
            .catch(err => console.log(err));
    }

    return (
        <Content>
            <div className="container">
                <Card>
                    <Block>
                        <h1 className="title"><span class="material-icons">person</span> Account</h1>
                    </Block>
                    <Block>
                        <h2 className="subtitle">{user.firstName} {user.lastName}</h2>
                    </Block>
                    <Block>
                        <h2 className="subtitle">About You</h2>
                        <div className="userContent">
                            <p>{user.about}</p>
                        </div>
                    </Block>
                    <Block>
                        <h2 className="subtitle">Your Gardens</h2>
                        <div className="userContent">
                            {gardens.length ? (
                                <div>
                                    {gardens.map(garden => (
                                        <div>
                                            <ul><li>{garden.title}
                                            </li></ul>
                                        </div>
                                    ))
                                    }
                                </div>
                            ) : (<h3>You have no gardens! Select Create a Garden to get started </h3>)
                            }
                        </div>
                    </Block>
                </Card>
            </div>
        </Content>
    )
}
export default UserFeed