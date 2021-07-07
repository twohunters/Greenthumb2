import React, { useState, useEffect } from "react";
import API from '../utils/API';
import { Link } from "react-router-dom";
import { Button } from 'react-bulma-components';
import { Form } from "react-bulma-components";
import './CreateGarden.css'

const { Input, Field, Control, Label, Checkbox, } = Form;



const CreateGarden = () => {
  //Setting our plant component's itial state to an empty array
  const [plants, setPlants] = useState([])
  //setting our formObject component with the name's and empty values we expect to have in the object
  const [formObject, setFormObject] = useState({ plants: [], plant_id: [], size: '', gardenName: ''})
  //setting our userplant component inital state to an empty array
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
    let value = event.target.getAttribute("data-plant-name")
    let plantId = event.target.getAttribute("data-plant-id")
    // returns true or false if the target is a checkbox
    const ifCheck = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // this statement will place the value of the checkbox that has been checked for the plant section
    if (name === "plants") {
      //If check is true we update the formObject with the name of the plant
      console.log(ifCheck)
      if (ifCheck === true) {
        let currentPlants = [...formObject.plants];
        let currentPlantIds = [...formObject.plant_id]
        let nameArray = [...currentPlants, value];
        console.log(nameArray)
        let idArray = [...currentPlantIds, plantId];
        console.log(idArray)
        setFormObject({ ...formObject, plants: nameArray })
        setFormObject({ ...formObject, plant_id: idArray })
      //if a checkbox is going from true to false, this code will remove that plant out of the array
      } else if (ifCheck === false) {
        let tempArray = userPlants
        let plantIndex = userPlants.indexOf(value)
        tempArray.splice(plantIndex, 1)
        setUserPlants(tempArray)
        value = tempArray;
        setFormObject({...setFormObject, plants:value})
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

// This function will post our data to our DB
  function handleFormSubmit(event) {
    console.log("BUTTON CLICK")
    event.preventDefault();
    const id = localStorage.getItem('id')
    API.saveGarden({
      title: formObject.gardenName,
      user_id: id,
      plant_id: formObject.plant_id,
      size: formObject.size,
      plants:formObject.plants
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
                  key={plant._id}
                  data-plant-name={plant.name}
                  data-plant-id={plant._id}>

                  {plant.name}

                </Form.Checkbox>
              ))}

            
            </Form.Control>_
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

