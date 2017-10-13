import React, { Component } from 'react';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
import { Link } from 'react-router-dom'

// https://react-bootstrap.github.io/
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// https://github.com/react-bootstrap/react-router-bootstrap
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

class HeaderNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <a href="#">Singlepage with React</a>
                        </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav activeKey={1}>
                        <IndexLinkContainer to="/">
                            <NavItem eventKey={1}>Home</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/contact">
                            <NavItem eventKey={2}>Contact</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/about">
                            <NavItem eventKey={3}>About</NavItem>
                        </IndexLinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default HeaderNav