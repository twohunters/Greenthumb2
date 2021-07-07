import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bulma-components";
import { Block } from "react-bulma-components";
import API from "../utils/API";
import "./UserFeed.css";
import {Content,Box} from "react-bulma-components";
const UserFeed = () => {
    const [user, setUser] = useState([])
    const [gardens,setGardens] = useState([])
    const { id } = useParams()
    
    useEffect(() => {

        getUser()
        getGardens()
        // console.log(id)
       
    },[])
    function getUser(){
        API.getUser()
        .then(res =>  setUser(res.data))
        .catch(err => console.log(err));
    }
    function getGardens(){
        API.findGardens({id:userId})
        .then(res =>  setGardens(res.data))
        .catch(err => console.log(err));
    }
    return (
        <div>
        <h1>{user.firstName} </h1> 
        <div className="container">
             <Content>
                 <Box className="section">
                     <h1 className="title"><span class="material-icons">person</span> Your Account</h1>
                     <h2 className="subtitle">{user.firstName} {user.lastName}</h2>
                 </Box>
                 <Box>
                     <h1 className="title">About You</h1>
                     <div className="userContent">
                         <p>{user.about}</p>
                     </div>
                 </Box>
                 <Box>
                     <h1 className="title">Your Gardens</h1>
                     <div className="userContent">
                        { gardens.length ?(
                            <div>
                                {gardens.map(garden=>(
                                    <div>
                                    <ul><li>{garden.title}
                                        </li></ul>
                                     </div>
                                ))
                                }
                                </div>
                                ):(<h3>You have no gardens! Select Create a Garden to get started </h3>)
                            }
                    </div>
               </Box>
            </Content>
            </div>
         </div>
    )
                        }
                        export default UserFeed 