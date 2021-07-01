import React, { useState, useEffect } from "react";
import API from '../utils/API';
import { Link } from "react-router-dom";
import { Button } from 'react-bulma-components';
import { Form } from "react-bulma-components";
import './CreateGarden.css'

const { Input, Field, Control, Label, Checkbox, } = Form;



const CreateGarden = () => {
  //Setting our component's itial state
  const [plants, setPlants] = useState([])
  const [formObject, setFormObject] = useState({ plants: [], size: '', gardenName: '' })
  const [userPlants, setUserPlants] = useState([])
  useEffect(() => {
    loadPlants()
  }, [])
  //Load all plants and sets them to plants
  function loadPlants() {
    API.getPlants()
      .then(res => { console.log(res); setPlants(res.data) }
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const target = event.target;
    // const input = target.value;
    let value = event.target.getAttribute("data-value")
    // returns true or false if the target is a checkbox
    const ifCheck = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // this statement will place the value of the checkbox that has been checked for the plant section
    if (name === "plants") {
      //If check is true we update the formObject with the name of the plant
      if (ifCheck === true) {
        let currentPlants = [...formObject.plants];
        let tempArray = [...currentPlants, value]
        setFormObject({ ...formObject, plants: tempArray })
      //if a checkbox is going from true to false, this code will remove that plant out of the array
      } if (ifCheck === false) {
        let tempArray = userPlants
        let plantIndex = userPlants.indexOf(value)
        tempArray.splice(plantIndex, 1)
        setUserPlants(tempArray)
        value = tempArray;
      }
    }
    //updating the formobject with the name and value of the selected size checkbox
    if (name === "size") {
      if (ifCheck === true) {
        setFormObject({ ...formObject, [name]: value })
      }
    }
    //updates the formobject with the name and value of the user's garden
    if (name === "gardenName") {
      value = event.target.value
      setFormObject({ ...formObject, [name]: value })
    }

  };


  function handleFormSubmit(event) {
    console.log("BUTTON CLICK")
    event.preventDefault();
    API.saveGarden({
      name: formObject.gardenName,
      plants: [formObject.plants],
      size: formObject.size

    })
    console.log(formObject)

  }

  return (

    <div className="container">
      <form>
    
        <Form.Input
          onChange={handleInputChange}
          type="text"
          name="gardenName"
          placeholder="Garden Name (required)"></Form.Input>

        <div className="sizeView">
          <Form.Field>
            <Form.Control>
              <h1>Please select one size.</h1>
              <Form.Checkbox
                onChange={handleInputChange}
                name="size"
                data-value="Individual"
                type="checkbox"
              >
                {'  '}Individual (100 square feet)
              </Form.Checkbox>
              <br></br>
              <Form.Checkbox
                onChange={handleInputChange}
                name="size"
                data-value="Couple"
                type="checkbox"
              // // checked={tocAgreed2}
              // onChange={(e) => {
              //   return setTocAgreed2(e.target.checked);
              // }}
              >
                {'  '}Couple (200 square feet)
              </Form.Checkbox>
              <br></br>
              <Form.Checkbox
                onChange={handleInputChange}
                name="size"
                data-value="Average Family"
                type="checkbox"

              >
                {'  '}Average Family (300-500 square feet)
              </Form.Checkbox>
              <br></br>
              <Form.Checkbox
                onChange={handleInputChange}
                name="size"
                data-value="Large Family"
                type="checkbox"
              >
                {'  '}Large Family(5+) (600-800 square feet)
              </Form.Checkbox>
              <br></br>
            </Form.Control>
          </Form.Field>
          <div className="plantview">
          <Form.Field >
            <Form.Control>
              <h1> Please select a plant from out database</h1>
              {plants.map(plant => (
                <Form.Checkbox
                  type="checkbox"
                  showPlants={false}
                  style={{ margin: "4px" }}
                  onChange={handleInputChange}
                  name="plants"
                  key={plant.id}
                  data-value={plant.name}>

                  {plant.name}

                </Form.Checkbox>
              ))}

            
            </Form.Control>
          </Form.Field>


        </div>
        </div>
        <div class=  "formFooter">
        <Link to = "/PlantForm">Dont see a plant from your garden? Help the community by adding to our DB!</Link>
        <Button color = "primary" onClick={handleFormSubmit} >Submit Your Garden </Button>
        </div>
       
      </form>
      </div>
  )
}

export default CreateGarden;