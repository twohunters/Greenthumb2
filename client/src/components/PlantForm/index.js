import React, { useState, useEffect } from "react";
import { Form } from "react-bulma-components";
import { Button } from "react-bulma-components";

import API from "../../utils/API";

const { Input, Field, Control, Label } = Form;

const PlantForm = (props) => {

    const [formObject, setFormObject] = useState({
        name: "",
        description: "",
        plant_habit: "",
        life_cylce: "",
        sun_req: "",
        water_req: "",
        uses: "",
        edible_parts: "",
        time_to_fruit: 0
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name) {
            API.savePlants({
                name: formObject.name,
                description: formObject.description,
                plant_habit: formObject.plant_habit,
                life_cycle: formObject.life_cycle,
                sun_req: formObject.sun_req,
                water_req: formObject.water_req,
                uses: formObject.uses,
                edible_parts: formObject.edible_parts,
                time_to_fruit: formObject.time_to_fruit
            })
            console.log(formObject)
        }
    };

    return (
        <div>
            <Form>
                <Form.Field>
                    <Form.Label>Plant Name</Form.Label>
                    <Form.Input onChange={handleInputChange} id="plantName" type="text" name="plantName" placeholder="Plant Name"></Form.Input>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Description</Form.Label>
                    <Form.Input onChange={handleInputChange} id="description" type="text" name="description"></Form.Input>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Habit</Form.Label>
                    <Form.Input onChange={handleInputChange} id="habit" type="text" name="habit"></Form.Input>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Life Cycle</Form.Label>
                    <Form.Input onChange={handleInputChange} id="lifeCycle" type="text" name="lifeCycle"></Form.Input>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Sun Requirements</Form.Label>
                    <Form.Input onChange={handleInputChange} id="sunReq" type="text" name="sunReq"></Form.Input>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Water Requirements</Form.Label>
                    <Form.Input onChange={handleInputChange} id="waterReq" type="text" name="waterReq"></Form.Input>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Uses</Form.Label>
                    <Form.Input onChange={handleInputChange} id="uses" type="text" name="uses"></Form.Input>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Edible</Form.Label>
                    <Form.Input onChange={handleInputChange} id="edible" type="text" name="edible"></Form.Input>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Time to Fruit</Form.Label>
                    <Form.Input onChange={handleInputChange} id="time" type="text" name="time"></Form.Input>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Recipes</Form.Label>
                    <Form.Input onChange={handleInputChange} id="recipes" type="text" name="recipes"></Form.Input>
                </Form.Field>
            </Form>
            <div>
                <Button onClick={handleFormSubmit}>Submit</Button>
            </div>
        </div>
    );
}

export default PlantForm;

// SLIDE 16