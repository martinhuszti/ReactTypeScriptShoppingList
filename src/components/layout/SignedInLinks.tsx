import React from 'react'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const SignedInLinks = (props: any) => {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link  as={Link} to='/newuser'> Új felhasználó felvétele
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={props.signOut}>Kijelentkezés</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
