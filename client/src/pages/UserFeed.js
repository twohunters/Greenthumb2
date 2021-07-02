import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import "./UserFeed.css";

const UserFeed = () => {
    const [user, setUser] = useState({
        _id:'',
        firstName:'',
        lastName:'',
        email:'',
        password: '',
        about: '',
    })
    const { id } = useParams()
    useEffect(() => {
        API.getUser(id)
        .then(res =>  setUser(res.data))
        .then(()=> console.log(user))
        .catch(err => console.log(err));
    },)
    return (
        <h1>{user.firstName}</h1> 
        // <div className="container">
        //     <Content>
        //         <Box className="section">
        //             <h1 className="title"><span class="material-icons">person</span> Your Account</h1>
        //             <h2 className="subtitle">{user.FirstName} {user.LastName}</h2>
        //         </Box>
        //         <Box>
        //             <h1 className="title">About You</h1>
        //             <div className="userContent">
        //                 <p>{user.About}</p>
        //             </div>
        //         </Box>
        //         <Box>
        //             <h1 className="title">Your Gardens</h1>
        //             <div className="userContent">
        //                 <p>{user.userGardens}</p>
        //             </div>
        //         </Box>
        //     </Content>
        // </div>
    )
}

export default UserFeed;

// SLIDE 12 & 13