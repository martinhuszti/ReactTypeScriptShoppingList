import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = (props: any) => {
    const { auth } = props
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="info" variant="light">
            <Navbar.Brand href="#home">Bevásárlólista</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav" variant="pills">
                <Nav variant="pills" >
                    {links}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Header)

