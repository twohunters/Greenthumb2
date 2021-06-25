//slides 9-11
import {Form} from 'react-bulma-components';
const {Input} = Form 
import React from "react";

function Input(props) {
    
  return (
    <div textSize="4" >
      <Form className="form-control" type="text" {...props} />
    </div>
  );
}

export default Input;