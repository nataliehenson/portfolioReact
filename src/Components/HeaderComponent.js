import React, { Component } from "react";
// import { Nav, Navbar, NavItem } from "reactstrap";
// import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" variant="light" sticky="top">
                    <Container>
                        <Navbar.Brand href="/main">Natalie Henson</Navbar.Brand>
                        <Nav className="justify-content-end">
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;
