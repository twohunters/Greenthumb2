import React from "react";

function PlantForm() {
    return (
        <div class="container is-fluid">
            <div class="field">
                <label class="label">Plant Name</label>
                <input class="input" type="text" id="plantname"></input>
            </div>
            <div class="field">
                <label class="label">Description</label>
                <input class="input" type="text" id="description"></input>
            </div>
            <div class="field">
                <label class="label">Habit</label>
                <input class="input" type="text" id="habit"></input>
            </div>
            <div class="field">
                <label class="label">Life Cycle</label>
                <input class="input" type="text" id="lifeCycle"></input>
            </div>
            <div class="field">
                <label class="label">Sun Requirements</label>
                <input class="input" type="text" id="sunRequirements"></input>
            </div>
            <div class="field">
                <label class="label">Water Requirements</label>
                <input class="input" type="text" id="waterRequirements"></input>
            </div>
            <div class="field">
                <label class="label">Uses</label>
                <input class="input" type="text" id="uses"></input>
            </div>
            <div class="field">
                <label class="label">Edible</label>
                <input class="input" type="text" id="edible"></input>
            </div>
            <div class="field">
                <label class="label">Time to Fruit</label>
                <input class="input" type="text" id="timeToFruit"></input>
            </div>
            <div class="field">
                <label class="label">Recipes</label>
                <input class="input" type="text" id="recipes"></input>
            </div>
        </div>
    )
}

export default PlantForm;

// SLIDE 16