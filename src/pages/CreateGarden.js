import React,{useState, useEffect} from "react";
import plants from './Plants'
import size from './Size'
import API from '../utils/API'
import {Link} from "react-router-dom";
import { Button} from 'react-bulma-components';
import { Navbar } from 'react-bulma-components';
import { Form } from "react-bulma-components";

const { Input, Field, Control, Label, Checkbox, } = Form;
const {Brand, Burger, Menu, Container, Item, Link} = Navbar


function CreateGarden() {
    //Setting our component's itial state
    const [plants, setPlants] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() =>{
        loadPlants()
    }, [])

    
    //Load all plants and sets them to plants
    function loadPlants() {
        API.getPlants()
        .then(res =>
            setPlants(res.data)
            )
            .catch(err => console.log(err));
    };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };


    function handleFormSubmit(event){
        event.preventDefault();
        API.saveGarden({
            name: formObject.name,
            plants: [formObject.plants]
        })
    }






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
                    <Button onClick = { () => setShowPlants(true)} color ="primary">Plants</Button>
                </Navbar.Item>
            </Navbar.Container>
        </Navbar>
        <div className ="plantview">
            <Form.Field>
                <Form.Control>
                {plants.map(plant => (
                    <Form.Checkbox>
                        {plant.name}
                    </Form.Checkbox>
                </Form.Control>
            </Form.Field>
          

        </div>

        

       
    </div>
    )
}