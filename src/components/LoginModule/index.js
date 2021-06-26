//slide 4
import React,{useState} from "react";
import './LoginModule.css'
import {Button} from 'react-bulma-components';
import {Form} from 'react-bulma-components';
import PropTypes from 'prop-types';

const LoginModule = props => {
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
        if(formObject.Email && formObject.Password)
        fetch('/api/users'{
            method:'POST',
            headers:{
                'accept' : 'application/json','Content-Type':'application/json'
            },
            body:JSON.stringify({
                email: formObject.email,
                password: formObject.password
            })
            .then((res)=> res.json())
            .then((result)=>{
                console.log(result)
                if(result.Status=="Invalid")
                alert("User Not Found")
                elsethis.props.history.push('/CreateGarden')
            })
        })
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
                    <Form.Input onChange={handleInputChange} type='text' name='Email'/>
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
LoginModule.propTypes = {
    setToken: PropTypes.func.isRequired
  }
export default LoginModule