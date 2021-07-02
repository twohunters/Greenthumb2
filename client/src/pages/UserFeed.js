import React,{useState,useEffect} from "react";
import { Content } from "react-bulma-components";
import { Heading } from "react-bulma-components";
import { Box } from "react-bulma-components";
import API from "../utils/API"
import { useParams } from "react-router-dom";
// import user data from user database

const UserFeed = props => {
    
    const [user,setUser]=useState([])
    const{id} = useParams()
useEffect(()=>{
    getUser()
},[])

function getUser(req){
    
    API.getUser(id)
    .then(res => {
        console.log(res); setUser(res.data)
       }
       ).catch(err=> console.log(err))
}

    return (
        <Content>
            <Heading>
            <span class="material-icons">person</span> Your Account
            </Heading>
            <Heading subtitle>
                {user.firstName}
            </Heading>
            <Box>
                <h3>About You</h3>
                {user.about}
            </Box>
            <Box>
                <h3>Your Gardens</h3>
                {user.garden}
            </Box>
        </Content>
    )
}

export default UserFeed;

// SLIDE 12 & 13