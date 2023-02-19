import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" >
                <NavLink to="/" className="p-3 text-decoration-none text-light mx-2" >C_Devops!</NavLink>
                <Container>
                
                    <NavLink to="/" className="text-decoration-none text-light mx-0">User Registration</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-5">Home</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light mx-2">Features</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default Header