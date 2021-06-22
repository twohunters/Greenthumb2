//slide 7
//TODO: All checkboxes checked when an indivudual one is clicked
//Change to each one indivudially clicked
import React,{useState} from "react";
import {Form} from 'react-bulma-components'
const {Field, Label, Checkbox, Control} = Form


function Size(){
    const [tocAgreed, setTocAgreed] = useState(false);
return(
    
    <Form.Field>
        <Form.Control>
          <Form.Checkbox
            checked={tocAgreed}
            onChange={(e) => {
              return setTocAgreed(e.target.checked);
            }}
          >
            {'  '}Individual (100 square feet)
          </Form.Checkbox>
          <br></br>
          <Form.Checkbox
            checked={tocAgreed}
            onChange={(e) => {
              return setTocAgreed(e.target.checked);
            }}
          >
            {'  '}Couple (200 square feet)
          </Form.Checkbox>
          <br></br>
          <Form.Checkbox
            checked={tocAgreed}
            onChange={(e) => {
              return setTocAgreed(e.target.checked);
            }}
          >
            {'  '}Average Family (300-500 square feet)
          </Form.Checkbox>
          <br></br>
          <Form.Checkbox
            checked={tocAgreed}
            onChange={(e) => {
              return setTocAgreed(e.target.checked);
            }}
          >
            {'  '}Large Family(5+) (600-800 square feet)
          </Form.Checkbox>
          <br></br>
        </Form.Control>
      </Form.Field>
      
)
}

export default Size;