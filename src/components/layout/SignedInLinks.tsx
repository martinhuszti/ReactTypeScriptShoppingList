import React from 'react'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { Nav, Button } from 'react-bootstrap'

const SignedInLinks = (props: any) => {
    return (
        <Nav variant="pills" >
            <Nav.Item>
                <Button variant="danger" onClick={props.signOut}>Kijelentkezés</Button>
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
