import React from "react";
import { Navbar, Container } from 'react-bootstrap'
import { ReactComponent as Logo } from '../images/logo.svg';

const NavbarStyle = {
    backgroundColor: '#E6E6FA'
};

const Header = ({title}) => {
    return (
        <Navbar style= {NavbarStyle} variant="light">
            <Container>
                <Logo alt ={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }}/>
            </Container>
        </Navbar>
    )
}

export default Header;