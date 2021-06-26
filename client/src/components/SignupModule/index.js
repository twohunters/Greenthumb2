//slide 3
import React,{useState,useEffect} from "react";
import './signUpModule.css'
import {Button} from 'react-bulma-components';
import {Form} from 'react-bulma-components';
import API from "../../utils/API"
import ReactFormInputValidation from "react-form-input-validation";
import { useHistory } from "react-router-dom"

const SignUpModal = props => {
    const history = useHistory()
    const [formObject,setFormObject]= useState({})
    if (!props.show){
        return null
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
            
      };
    function handleFormSubmit(event) {
        event.preventDefault();
        //  if (formObject.FistName && formObject.LastName && formObject.Email && formObject.Password) {
          API.saveUser({
            firstName: formObject.FirstName,
            lastName: formObject.LastName,
            email: formObject.Email,
            password:formObject.Password,
            about: formObject.About
          })
          .then(res=>{
            const id = res.data._id ;
          history.push('/UserFeed/'+ id)
          props.onClose()
          })
            .catch(err => console.log(err));
        //  }
      };
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Sign Up!</h4>
                </div>
                <div className="modal-body">
                <Form.Field>
                    <Form.Label>
                        First Name:
                    </Form.Label>
                    <Form.Input onChange={handleInputChange} id="firstName" type='text' name='FirstName'/>
                    <Form.Label>
                        Last Name
                    </Form.Label>
                    <Form.Input onChange={handleInputChange} id="lastName" type='text' name='LastName'/>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Input onChange={handleInputChange} id="email" type='text' name='Email'/>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Input onChange={handleInputChange} id="password"type='password' name='Password'/>
                    <Form.Label>
                        About You
                        </Form.Label>
                    
                    <Form.Input id='about' type='text' name='About'/>
                </Form.Field>
                <Form.Label className="error">
               
                </Form.Label>
                
                <div className="modal-footer">
                    <Button  onClick={handleFormSubmit}  className="button">Sign up</Button>
                    <Button onClick={props.onClose}  className="button ">Close</Button>
                </div>
                </div>
                </div>
                </div>
        
    )
}
export default SignUpModal