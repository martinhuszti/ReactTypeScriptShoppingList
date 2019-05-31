import React from 'react'
import {Nav} from 'react-bootstrap'

const SignedOutLinks = () => {
    return (
        <Nav.Item>
            <Nav.Link to='/signin'>Log in</Nav.Link>
        </Nav.Item>
    )
}

export default SignedOutLinks;
