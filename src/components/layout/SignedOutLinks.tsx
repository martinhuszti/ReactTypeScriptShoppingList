import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <Nav variant="pills" >
            <Nav.Item>
                <Nav.Link href="#" as={Link} to='/signin'>Bejelentkezés</Nav.Link>
            </Nav.Item>   
             </Nav>

    )
}

export default SignedOutLinks;
