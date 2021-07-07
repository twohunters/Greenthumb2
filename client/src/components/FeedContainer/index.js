import React, { useState, useEffect } from "react";
import { Content } from "react-bulma-components";
import { Block } from "react-bulma-components";
import API from "../../utils/API"
import "./feedContainer.css"
const FeedContainer = props => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers()
    }, [])
    function getUsers() {
        API.getAllUsers()
            .then(res => {
                console.log(res); setUsers(res.data)
            })
            .catch(err => console.log(err))

    }
    return (
        <div className="container">
            {users.length ? (
                <Content>
                    {users.map(user => (
                        <div className="card">
                            <Block>
                                <h2 className="title">
                                    {user.firstName} {user.lastName}
                                </h2>
                                <h4 className="subtitle">
                                    created a new garden called {user.gardenName} !
                                </h4>
                            </Block>
                            <Block>
                                <p>This garden includes: </p>
                                <div>
                                    {user.gardenPlants}
                                </div>
                            </Block>
                        </div>
                    ))
                    }
                </Content>


            ) : (<h3>No results to display</h3>)}
        </div>
    )
}


export default FeedContainer;


// SLIDE 2