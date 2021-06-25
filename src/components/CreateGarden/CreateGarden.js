import React,{useState} from "react";
import plants from '../../pages/Plants'
import size from '../../pages/Size'
import { Button} from 'react-bulma-components';
import { Navbar } from 'react-bulma-components';
import { Form } from "react-bulma-components";

const { Input, Field, Control, Label } = Form;
const {Brand, Burger, Menu, Container, Item, Link} = Navbar


function CreateGarden(props) {
    const[ showSize, setShowSize] = useState(false)
    const[ showPlans, setShowPlants] = useState(false)
    return(
    <div className ="container">
        <Form>
            <Form.Label>Garden Name:</Form.Label>
            <Form.Input type= "text" name="gardenName"></Form.Input>
        </Form>
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