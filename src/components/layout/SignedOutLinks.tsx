import React from 'react'
import { Nav } from 'react-bootstrap'

const SignedOutLinks = () => {
    return (
        <Nav variant="pills" >
            <Nav.Item>
                <Nav.Link href="#/home" to='/signin'>Log in</Nav.Link>
            </Nav.Item>   
             </Nav>

    )
}

export default SignedOutLinks;
