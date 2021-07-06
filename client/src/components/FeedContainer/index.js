import React,{useState,useEffect} from "react";
import { Content } from "react-bulma-components";
import { Image } from "react-bulma-components";
import { Heading } from "react-bulma-components";
import { Block } from "react-bulma-components";
import API from '../../utils/API'
const FeedContainer = props => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        getUsers()
    },[])
    function getUsers(){
        API.getAllUsers()
    
         .then(res => {
             console.log(res); setUsers(res.data)
            }
            ).catch(err=> console.log(err))

    }
    return(
        <div>
        {users.length ?(
        <Content>
            {users.map(user=>(
                <div>

            
            <Heading>
                {user.firstName} {user.lastName}
            </Heading>
            <Heading subtitle>
            created a new garden called {user.gardenName} !
            </Heading>
            
            <Block>
                This garden includes: {user.gardenPlants}
            </Block>
            </div>
            ))
            }
        </Content>

        
        ):(<h3>No results to display</h3>)}
        </div>
    )
}


export default FeedContainer;


// SLIDE 2