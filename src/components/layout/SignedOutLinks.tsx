import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <Nav variant="pills" >
            <Nav.Item>
                <Nav.Link as={Link} to='/signin'>Log in</Nav.Link>
            </Nav.Item>   
             </Nav>

    )
}

export default SignedOutLinks;
