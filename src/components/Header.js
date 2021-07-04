import React, { Component } from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap/';
import './Header.css';



class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Digimons</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className='comp' href="/">Home</Nav.Link>
                        <Nav.Link className='comp' href="/favorite">My Favarite Digimons</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Header;
