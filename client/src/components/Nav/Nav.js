//all pages
import React,{useState} from "react";
import SignUpModal from '../SignupModule'
import LoginModule from '../LoginModule'
import { Button} from 'react-bulma-components';
import { Navbar } from 'react-bulma-components';
const {Brand, Burger, Menu, Container, Item, Link} = Navbar


function Nav(){
    const[show,setShow] = useState(false)
    return(
    <Navbar color ="primary">
        <Navbar.Container>
        <Navbar.Item>
            Green Thumb
        </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container align="end">
            <Navbar.Item>
                <Button onClick={()=> setShow(true)} color="primary">Login</Button>
                <LoginModule onClose={() => setShow(false)} show ={show}/>
                <Button onClick={()=> setShow(true)} color="primary">Sign Up</Button>
                <SignUpModal onClose={() => setShow(false)} show ={show}/>
            </Navbar.Item>

        </Navbar.Container>
    </Navbar>
    )
}

export default Nav;