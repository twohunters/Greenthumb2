//slide 10
import React from "react";
import {Card} from "react-bulma-components";
const { Header, Title, Content } = Card;

function GardenCard(props){
   // This array will be filled with the data of the user's garden name
   // Userdata = get(userInfo)
  //  userGardenArray = ['userData.garden1', 'userData.garden2',...]
// maybe set state here to change the plants on line 20??
//for (i=0; i< userGardenArray.length; i++)
//return html?
    return(
        <Card>
            <Card.Header>
                <Card.Header.Title>
                    {props.gardenName}
                </Card.Header.Title>
            </Card.Header>
            <Card.Content>
                {props.gardenPlants}
            </Card.Content>
        </Card>
    )
}

export default GardenCard;