import React, { useState, useEffect } from "react";
import API from '../utils/API';
import { Link } from "react-router-dom";
import { Button } from 'react-bulma-components';
import { Form } from "react-bulma-components";
import './PlantForm.css'

const { Input, Field, Control, Label, Checkbox, } = Form;

const TestPlantForm = () =>{
    //setting the names and setting the values to empty
    const[formObject, setFormObject] =useState({
        plantName: '',
        description: '',
        plant_habit: '',
        life_cylce: '',
        sun_req: '',
        water_req: '',
        uses: '',
        edible_parts:'',
        time_to_fruit: 0
    })
    //Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const {name, value} = event.target;
        setFormObject({...formObject, [name]: value })
    }
    //saving the plant to the DB
    function handleFormSubmit(event){
        event.preventDefault();
        if(formObject.plantName){
            API.savePlants({
                plantName: formObject.plantName,
                description: formObject.description,
                plant_habit: formObject.plant_habit,
                life_cylce: formObject.life_cylce,
                sun_req: formObject.sun_req,
                water_req: formObject.water_req,
                uses: formObject.uses,
                edible_parts: formObject.edible_parts,
                time_to_fruit: formObject.time_to_fruit
            })
            console.log(formObject)
        }
    }
    return(
        <div className ="container">
            <form>
                <div className ="inputRow">
                <h1>Plant Name</h1>
                <Form.Input
                onChange={handleInputChange}
                name="plantName"
                placeholder="Ex: Corn"
                >
                </Form.Input>
                </div>
                <div className ="inputRow">
                <h1>Plant Description</h1>
                <Form.Input
                onChange={handleInputChange}
                name="description"
                placeholder="Ex: Corn is a common vegitable in the American diet. Not to be confused with the band Korn."
                >
                </Form.Input>
                </div>
                <div className ="inputRow">
                <h1>Plant's Habit</h1>
                <Form.Input
                onChange={handleInputChange}
                name="plant_habit"
                placeholder="Plant habit is a term defining a plant's overall shape and form."
                >
                </Form.Input>
                </div>
                <div className ="inputRow">
                <h1>Plant's Life Cycle</h1>
                <Form.Input
                onChange={handleInputChange}
                name="life_cycle"
                placeholder="Biennials, Perennial or Annual"
                >
                </Form.Input>
                </div>
                <div className ="inputRow">
                <h1>Sun Requirments</h1>
                <Form.Input
                onChange={handleInputChange}
                name="sun_req"
                placeholder="Ex: Full sun"
                >
                </Form.Input>
                </div>
                <div className ="inputRow">
                <h1>Water Requirments</h1>
                <Form.Input
                onChange={handleInputChange}
                name="water_req"
                placeholder="Ex 1-2 inches a week"
                >
                </Form.Input>
                </div>
                <div className ="inputRow">
                <h1>Plant uses</h1>
                <Form.Input
                onChange={handleInputChange}
                name="uses"
                placeholder="Ex: Brewed in tea to help with anxiety"
                >
                </Form.Input>
                </div>
                <div className ="inputRow">
                <h1>Edible Portion</h1>
                <Form.Input
                onChange={handleInputChange}
                name="edible_parts"
                placeholder="Buds"
                >
                </Form.Input>
                </div>
                <div className ="inputRow">
                <h1>Time to Fruit(In days)</h1>
                <Form.Input
                onChange={handleInputChange}
                name="time_to_fruit"
                placeholder="Please just enter a number"
                >
                </Form.Input>
                </div>
                <div classname ="btnContainer">
                <Button className ="submitBtn" color ="primary" onClick={handleFormSubmit}>Add the plant to our Data Base!</Button>
                </div>
            </form>
        </div>
    )
}

export default TestPlantForm;