//all pages
import React, { useState } from "react";
import SignUpModal from '../SignupModule'
import LoginModule from '../LoginModule'
import { Button } from 'react-bulma-components';
import { Navbar } from 'react-bulma-components';
import { useHistory } from "react-router-dom"

const { Brand, Burger, Menu, Container, Item, Link } = Navbar



function Nav() {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
    const history = useHistory()
    const id = localStorage.getItem('id')
    return (
        <div>
            <Navbar color="primary">
                <Navbar.Container>
                    <Navbar.Item href ='/'>
                        Green Thumb
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container align="end">
                    <Navbar.Item>
                        <Button onClick={() => setShowLogin(true)} color="primary">Login</Button>
                        <LoginModule onClose={() => setShowLogin(false)} show={showLogin} />
                        <Button onClick={() => setShowSignup(true)} color="primary">Sign Up</Button>
                        <SignUpModal onClose={() => setShowSignup(false)} show={showSignup} />
                        <Button onClick={() => history.push('/UserFeed/'+ {id})} >My Account</Button>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar>
        </div>
    )
}

export default Nav;