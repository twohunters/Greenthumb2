import React,{useState, useEffect} from "react";
import plants from './Plants'
import size from './Size'
import API from '../utils/API'
import {Link} from "react-router-dom";
import { Button} from 'react-bulma-components';
import { Navbar } from 'react-bulma-components';
import { Form } from "react-bulma-components";

const { Input, Field, Control, Label, Checkbox, } = Form;
const {Brand, Burger, Menu, Container, Item, } = Navbar


const CreateGarden= () => {

    const [tocAgreed1, setTocAgreed1] = useState(false);
    const [tocAgreed2, setTocAgreed2] = useState(false);
    const [tocAgreed3, setTocAgreed3] = useState(false);
    const [tocAgreed4, setTocAgreed4] = useState(false);
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
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };


    function handleFormSubmit(event){
        event.preventDefault();
        console.log("clicked ")
        API.saveGarden({
            name: formObject.name,
            plants: [formObject.plants],
            size: formObject.size
        })
    }



 

    return(
    <div className ="container">
       <form>
            <Form.Label>Garden name:</Form.Label>
            <Form.Input type= "text" name="gardenName"></Form.Input>
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
        <div classname ="sizeView">
        <Form.Field>
        <Form.Control>
            <h1>Please select one size.</h1>
          <Form.Checkbox
            checked={tocAgreed1}
            onChange={(e) => {
              return setTocAgreed1(e.target.checked);
            }}
          >
            {'  '}Individual (100 square feet)
          </Form.Checkbox>
          <br></br>
          <Form.Checkbox
            checked={tocAgreed2}
            onChange={(e) => {
              return setTocAgreed2(e.target.checked);
            }}
          >
            {'  '}Couple (200 square feet)
          </Form.Checkbox>
          <br></br>
          <Form.Checkbox
            checked={tocAgreed3}
            onChange={(e) => {
              return setTocAgreed3(e.target.checked);
            }}
          >
            {'  '}Average Family (300-500 square feet)
          </Form.Checkbox>
          <br></br>
          <Form.Checkbox
            checked={tocAgreed4}
            onChange={(e) => {
              return setTocAgreed4(e.target.checked);
            }}
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
                    showPlants = {false}
                    style={{margin: "4px"}}
                    onChange={handleInputChange}
                    name={plant.name}
                    key={plant.id}>
                        {plant.name}
                    </Form.Checkbox>
                ))}

                    <Button onclick = {handleFormSubmit}>Create </Button>
                </Form.Control>
            </Form.Field>
          

        </div>

        

       
    </div>
    )
}

export default CreateGarden;