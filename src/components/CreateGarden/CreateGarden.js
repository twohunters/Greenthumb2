import React,{useState} from "react";
import plants from '../../pages/Plants'
import size from '../../pages/Size'
import { Button} from 'react-bulma-components';
import { Navbar } from 'react-bulma-components';
const {Brand, Burger, Menu, Container, Item, Link} = Navbar


function CreateGarden(props) {
    const[ showSize, setShowSize] = useState(false)
    const[ showPlans, setShowPlants] = useState(false)
    return(
    <div>
        <h1>{props.garden.name}</h1>
        <Navbar color = "primary">
            <Navbar.Container>
                <Navbar.Item>
                    <Button  onClick ={() => setShowSize(true)} color="primary">Size</Button>
                    <Button onClick = { () => setShowPlants(true)} color ="primary">plants</Button>
                </Navbar.Item>
            </Navbar.Container>
        </Navbar>
    </div>
    )
}