//slide 4

import React,{useState, useContext} from "react";
import './LoginModule.css'
import {Button} from 'react-bulma-components';
import {Form} from 'react-bulma-components';
import PropTypes from 'prop-types';
import API from "../../utils/API";
import { useHistory } from "react-router-dom"
import Global from '../../utils/Global'
import Validate from 'react-validate-form'


const LoginModule = props => {
    const [formObject,setFormObject]= useState({})
    const user = useContext(Global)
    const history = useHistory()
    const id = useContext(Global)
    console.log(id)
    if (!props.show){
        return null
    }

    // Handles the input data 
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };
      // Log in function after the user submits 
      function handleFormSubmit(e){
          e.preventDefault()
          API.findUser({
              email:formObject.Email,
              password:formObject.Password
          })
          .then(res=>{
            props.onClose()
            const id = res.data.id
            history.push('/UserFeed/'+ id)
              console.log(res.data)
              localStorage.setItem('id',res.data.id)
            // if(res.data.isLoggedin===true){
              
            // }

      
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