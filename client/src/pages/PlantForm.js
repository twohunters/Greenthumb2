import React, {useState, useEffect} from "react";
import { Form } from "react-bulma-components";
import { Button } from "react-bulma-components";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

const { Input, Field, Control, Label } = Form;

const PlantForm = (props)=> {
    const history = useHistory();
    const [formObject, setFormObject] = useState({});

    if (!props.show) {
        return null
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        API.savePlants({
            plantName: formObject.plantName,
            description: formObject.description,
            habit: formObject.habit,
            lifeCycle: formObject.lifeCycle,
            sunReq: formObject.sunReq,
            waterReq: formObject.waterReq,
            uses: formObject.uses,
            edible: formObject.edible,
            time: formObject.time,
            recipes: formObject.recipes
        })
            .then(res => {
                const id = res.data._id
                history.push("URL" + id)
                props.onClose()
            })
            .catch(err => console.log(err))
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

// function PlantForm() {
//     return (
//         <Form>
//             <Form.Field>
//                 <Form.Label>Plant Name</Form.Label>
//                 <Form.Input type="text" name="plantName"></Form.Input>
//             </Form.Field>
//             <Form.Field>
//                 <Form.Label>Description</Form.Label>
//                 <Form.Input type="text" name="description"></Form.Input>
//             </Form.Field>
//             <Form.Field>
//                 <Form.Label>Habit</Form.Label>
//                 <Form.Input type="text" name="habit"></Form.Input>
//             </Form.Field>
//             <Form.Field>
//                 <Form.Label>Life Cycle</Form.Label>
//                 <Form.Input type="text" name="lifeCycle"></Form.Input>
//             </Form.Field>
//             <Form.Field>
//                 <Form.Label>Sun Requirements</Form.Label>
//                 <Form.Input type="text" name="sunReq"></Form.Input>
//             </Form.Field>
//             <Form.Field>
//                 <Form.Label>Water Requirements</Form.Label>
//                 <Form.Input type="text" name="waterReq"></Form.Input>
//             </Form.Field>
//             <Form.Field>
//                 <Form.Label>Uses</Form.Label>
//                 <Form.Input type="text" name="uses"></Form.Input>
//             </Form.Field>
//             <Form.Field>
//                 <Form.Label>Edible</Form.Label>
//                 <Form.Input type="text" name="edible"></Form.Input>
//             </Form.Field>
//             <Form.Field>
//                 <Form.Label>Time to Fruit</Form.Label>
//                 <Form.Input type="text" name="time"></Form.Input>
//             </Form.Field>
//             <Form.Field>
//                 <Form.Label>Recipes</Form.Label>
//                 <Form.Input type="text" name="recipes"></Form.Input>
//             </Form.Field>
//         </Form>
//     )
// }

export default PlantForm;

// SLIDE 16