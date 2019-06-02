import React, { useState } from 'react'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap'
import ItemCreate from '../shoppingitem/ItemCreate';

const Header = (props: any) => {
    const { auth } = props
    const [showModal, setShowModal] = useState(false)
    const links = auth.uid ? <SignedInLinks setShowModal={setShowModal} /> : <SignedOutLinks />
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand href="/">Bevásárlólista</Navbar.Brand>
                <Nav className="justify-content-start" variant="pills" >
                    <Nav.Item>
                        <Button variant="success" onClick={() => setShowModal(true)}>
                            Új termék
                      </Button>
                    </Nav.Item>
                </Nav>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav" >
                    {links}
                </Navbar.Collapse>
            </Navbar>

            <ItemCreate showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Header)

