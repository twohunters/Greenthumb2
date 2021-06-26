//slide 4
import React from "react";
import './LoginModule.css'
import {Button} from 'react-bulma-components';
import {Form} from 'react-bulma-components';

const LoginModule = props => {
    if (!props.show){
        return null
    }

 
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Log In</h4>
                </div>
                <div className="modal-body">
                <Form.Field>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Input type='text' name='Email'/>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Input type='password' name='Password'/>
                </Form.Field>
                </div>
                <div className="modal-footer">
                    <Button onClick={props.onClose} align='right' className="button">Log In</Button>
                    <Button onClick={props.onClose} align='right' className="button ">Close</Button>
                </div>
            </div>
        </div>
        
    )
}
export default LoginModule