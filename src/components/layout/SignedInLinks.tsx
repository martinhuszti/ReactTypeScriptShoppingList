import React from 'react'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import User from './../../models/User'

const SignedInLinks = (props: any) => {
    const { profile }: { profile: User } = props

    return (
        <Nav>
            {profile.email === "martinhuszti@gmail.com" ? <Nav.Item>
                <Nav.Link href="#" as={Link} to='/newgroup'> Új csoport létrehozása
                    </Nav.Link>
            </Nav.Item>
                : null}

            <Nav.Item>
                <Nav.Link href="#" as={Link} to='/newuser'> Új felhasználó felvétele
                    </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" onClick={props.signOut}>Kijelentkezés</Nav.Link>
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
