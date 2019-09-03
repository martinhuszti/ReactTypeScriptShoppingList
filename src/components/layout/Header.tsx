import React, { useState } from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import { Navbar, Nav, Button } from 'react-bootstrap'
import ItemCreate from './ItemCreate'
import { Link } from 'react-router-dom'
import User from './../../models/User'


const Header = (props: any) => {
    const { auth } = props
    const [showModal, setShowModal] = useState(false)
    const { profile }: { profile: User } = props
    const links = auth.uid ? <SignedInLinks profile={profile} setShowModal={setShowModal} /> : <SignedOutLinks />
    const hide = auth.uid ? false : true
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <div className="container">

                    <Navbar.Brand as={Link} to='/'>Bevásárlólista</Navbar.Brand>

                    <Nav.Item>
                        <Button hidden={hide}  onClick={() => setShowModal(true)}>
                        <i className="material-icons"> add_shopping_cart</i>
                      </Button>
                    </Nav.Item>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav" >
                        {links}
                    </Navbar.Collapse>
                </div>

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

