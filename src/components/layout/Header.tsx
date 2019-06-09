import React, { useState } from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import { Navbar, Nav, Button } from 'react-bootstrap'
import ItemCreate from '../shoppingitem/ItemCreate'
import { Link } from 'react-router-dom'


const Header = (props: any) => {
    const { auth } = props
    const [showModal, setShowModal] = useState(false)
    const links = auth.uid ? <SignedInLinks profile={props.profile} setShowModal={setShowModal} /> : <SignedOutLinks />
    const hide = auth.uid ? false : true
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand as={Link} to='/'>Bevásárlólista</Navbar.Brand>
                <Nav className="justify-content-start" variant="pills" >
                    <Nav.Item>
                        <Button hidden={hide} variant="success" onClick={() => setShowModal(true)}>
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
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Header)

