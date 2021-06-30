import React,{useState, useEffect} from "react";
import API from '../utils/API';
import {Link} from "react-router-dom";
import { Button} from 'react-bulma-components';
import { Navbar } from 'react-bulma-components';
import { Form } from "react-bulma-components";

const { Input, Field, Control, Label, Checkbox, } = Form;
const {Brand, Burger, Menu, Container, Item, } = Navbar


const CreateGarden= () => {

    // const [tocAgreed1, setTocAgreed1] = useState(false);
    // const [tocAgreed2, setTocAgreed2] = useState(false);
    // const [tocAgreed3, setTocAgreed3] = useState(false);
    // const [tocAgreed4, setTocAgreed4] = useState(false);
    const[ showSize, setShowSize] = useState(false)
    const[ showPlants, setShowPlants] = useState(false)

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
            
            {console.log(res); setPlants(res.data)}
            )
            .catch(err => console.log(err));
    };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormObject({...formObject,  [name]: value})
  };


    function handleFormSubmit(event){
      console.log("BUTTON CLICK")
        event.preventDefault();
        API.saveGarden({
            name: formObject.gardenName,
            plants: [formObject.plants],
            size: formObject.size

        })
        console.log(formObject)
        
    }






 

    return(
    <div className ="container">
       <form>
            <Form.Label>Garden name:</Form.Label>
            <Form.Input 
            onChange={handleInputChange}
            type= "text" 
            name="gardenName"
            placeholder="Garden Name (required)"></Form.Input>
        </form> 
        <Navbar color = "primary">
            <Navbar.Container>
                <Navbar.Item> 
                    {/* //this button will show the size */}
                    <Button  onClick ={() => setShowSize(true)} color="primary">Size</Button>
                     {/* //this button will show the plant */}
                    <Button onClick = { () => setShowPlants(true)} color ="primary">Plants</Button>
                </Navbar.Item>
            </Navbar.Container>
        </Navbar> 
        <div className ="sizeView">
        <Form.Field>
        <Form.Control>
            <h1>Please select one size.</h1>
          <Form.Checkbox
          onChange={handleInputChange}
          name="size"
          value="Individual"
          type= "checkbox"
          >
            {'  '}Individual (100 square feet)
          </Form.Checkbox>
          <br></br>
          <Form.Checkbox
          onChange={handleInputChange}
          name="size"
          value="Couple"
          type= "checkbox"
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
          value="Average Family"
          type= "checkbox"
          >
            {'  '}Average Family (300-500 square feet)
          </Form.Checkbox>
          <br></br>
          <Form.Checkbox
          onChange={handleInputChange}
          name="size"
          value="Large Family"
          type= "checkbox"
          >
            {'  '}Large Family(5+) (600-800 square feet)
          </Form.Checkbox>
          <br></br>
        </Form.Control>
      </Form.Field>
      </div>
        <div className ="plantview">
            <Form.Field >
                <Form.Control>
                {plants.map(plant => (
                    <Form.Checkbox
                     type= "checkbox"
                    showPlants = {false}
                    style={{margin: "4px"}}
                    onChange={handleInputChange}
                    name="plants"
                    key={plant.id}
                    value={plant.name}>

                        {plant.name}

                    </Form.Checkbox>
                ))}

                    <Button onClick = {handleFormSubmit} >Create  </Button>
                </Form.Control>
            </Form.Field>
          

        </div>

        

       
    </div>
    )
}

export default CreateGarden;