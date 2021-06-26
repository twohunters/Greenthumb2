//slide 8
import React,{useState} from "react";
import {Form} from 'react-bulma-components'
const {Field, Label, Checkbox, Control} = Form


function Plants(){
  //Get plant names from database, we want to render a checkbox next to the name of the plant for each plant.
  //ask about setting a for loop to create a useState for each plant's check box
    const [tocAgreed, setTocAgreed] = useState(false);
    const plantArray =[]
    let i;
     for(i=0; i<plantArray.length; i++){
         return(
    <Form.Field>
        <Form.Control>
          <Form.Checkbox
            checked={tocAgreed}
            onChange={(e) => {
              return setTocAgreed(e.target.checked);
            }}
          >
            {'  '}{plantArray[i].name}
          </Form.Checkbox>
          </Form.Control>
        </Form.Field>
         )
     }
    };

    export default Plants;