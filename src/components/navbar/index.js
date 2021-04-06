import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import MenuItems from './menu';

export default function SideMenu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="#home">React-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">{MenuItems.home}</Nav.Link>
                    <NavDropdown title={MenuItems.advanced_guides} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/list">{MenuItems.advanced_guides_lists.code_splitting}</NavDropdown.Item>
                        <NavDropdown.Item href="/context">{MenuItems.advanced_guides_lists.context}</NavDropdown.Item>
                        <NavDropdown.Item href="/list">{MenuItems.advanced_guides_lists.context}</NavDropdown.Item>
                        <NavDropdown.Item href="/list">{MenuItems.advanced_guides_lists.context}</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}