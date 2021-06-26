import React from "react";
import { Content } from "react-bulma-components";
import { Image } from "react-bulma-components";
import { Heading } from "react-bulma-components";
import { Block } from "react-bulma-components";

const FeedContainer = props => {
    return(
        <Content>
            <Image>
                {props.userImage}
            </Image>
            <Heading>
                {props.firstName} {props.lastName}
            </Heading>
            <Heading subtitle>
            created a new garden called {props.gardenName} !
            </Heading>
            <Block>
                This garden includes: {props.gardenPlants}
            </Block>
        </Content>
    )
}

export default FeedContainer;

// SLIDE 2