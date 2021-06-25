//slide 7
//TODO: All checkboxes checked when an indivudual one is clicked
//Change to each one indivudially clicked
import React,{useState} from "react";
import {Form} from 'react-bulma-components'
const {Field, Label, Checkbox, Control} = Form


function Size(){
    const [tocAgreed1, setTocAgreed1] = useState(false);
    const [tocAgreed2, setTocAgreed2] = useState(false);
    const [tocAgreed3, setTocAgreed3] = useState(false);
    const [tocAgreed4, setTocAgreed4] = useState(false);
return(
    
    <Form.Field>
        <Form.Control>
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
      
)
}

export default Size;