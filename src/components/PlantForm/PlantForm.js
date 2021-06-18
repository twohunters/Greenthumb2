import React from "react";
import { Form } from "react-bulma-components";

const { Input, Field, Control, Label } = Form;

function PlantForm() {
    return (
        <Form>
            <Form.Field>
                <Form.Label>Plant Name</Form.Label>
                <Form.Input type="text"></Form.Input>
            </Form.Field>
            <Form.Field>
                <Form.Label>Description</Form.Label>
                <Form.Input type="text"></Form.Input>
            </Form.Field>
            <Form.Field>
                <Form.Label>Habit</Form.Label>
                <Form.Input type="text"></Form.Input>
            </Form.Field>
            <Form.Field>
                <Form.Label>Life Cycle</Form.Label>
                <Form.Input type="text"></Form.Input>
            </Form.Field>
            <Form.Field>
                <Form.Label>Sun Requirements</Form.Label>
                <Form.Input type="text"></Form.Input>
            </Form.Field>
            <Form.Field>
                <Form.Label>Water Requirements</Form.Label>
                <Form.Input type="text"></Form.Input>
            </Form.Field>
            <Form.Field>
                <Form.Label>Uses</Form.Label>
                <Form.Input type="text"></Form.Input>
            </Form.Field>
            <Form.Field>
                <Form.Label>Edible</Form.Label>
                <Form.Input type="text"></Form.Input>
            </Form.Field>
            <Form.Field>
                <Form.Label>Time to Fruit</Form.Label>
                <Form.Input type="text"></Form.Input>
            </Form.Field>
            <Form.Field>
                <Form.Label>Recipes</Form.Label>
                <Form.Input type="text"></Form.Input>
            </Form.Field>
        </Form>
    )
}

export default PlantForm;

// SLIDE 16