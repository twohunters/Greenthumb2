//slide 3
import React from "react";
import './signUpModule.css'
import {Button} from 'react-bulma-components';
import {Form} from 'react-bulma-components';

const SignUpModal = props => {
    if (!props.show){
        return null
    }

 
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
                    <Form.Input id="firstName" type='text' name='First Name'/>
                    <Form.Label>
                        Last Name
                    </Form.Label>
                    <Form.Input id="lastName" type='text' name='Last Name'/>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Input id="email" type='text' name='Email'/>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Input id="password"type='password' name='Password'/>
                    <Form.Label>
                        About You
                        </Form.Label>
                    
                    <Form.Input id='about' type='text' name='About'/>
                </Form.Field>
                </div>
                
                <div className="modal-footer">
                    <Button onClick={props.onClose}  className="button">Sign up</Button>
                    <Button onClick={props.onClose}  className="button ">Close</Button>
                </div>
                </div>
            
        </div>
        
    )
}
export default SignUpModal