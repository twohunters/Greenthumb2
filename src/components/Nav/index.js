//all pages
import React from "react";
import { Button} from 'react-bulma-components';
import { Navbar } from 'react-bulma-components';
const {Brand, Burger, Menu, Container, Item, Link} = Navbar

function Nav(){
    return(
    <Navbar color ="primary">
        <Navbar.Container>
        <Navbar.Item>
            Green Thumb
        </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container align="end">
            <Navbar.Item>
                <Button color="primary">Login</Button>
                <Button color="primary">Sign Up</Button>
            </Navbar.Item>

        </Navbar.Container>
    </Navbar>
    )
}

export default Nav;