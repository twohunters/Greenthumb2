//slide 4
import React,{useState} from "react";
import './LoginModule.css'
import {Button} from 'react-bulma-components';
import {Form} from 'react-bulma-components';
import PropTypes from 'prop-types';
import API from "../../utils/API";
import { useHistory } from "react-router-dom"



const LoginModule = props => {
    const [formObject,setFormObject]= useState({})
    const history = useHistory()
    if (!props.show){
        return null
    }

    
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };
      function handleFormSubmit(e){
          e.preventDefault()
          
          API.findUser({
              email: formObject.Email,
              password:formObject.Password
          })
          .then(res=>{
              console.log(res.data)
              history.push('/UserFeed/')
          })
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
                    <Form.Input  onChange={handleInputChange} type='text' name='Email'/>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Input onChange={handleInputChange} type='password' name='Password'/>
                </Form.Field>
                </div>
                <div className="modal-footer">
                    <Button onClick={handleFormSubmit} align='right' className="button">Log In</Button> 
                    <Button onClick={props.onClose} align='right' className="button ">Close</Button>
                </div>
            </div>
        </div>
        
    )
}

// LoginModule.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }
export default LoginModule