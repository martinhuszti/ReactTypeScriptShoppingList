import React from 'react'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import User from './../../models/User'

const SignedInLinks = (props: any) => {
    const { profile }: { profile: User } = props

    return (
        <Nav >
            {profile.email === "martinhuszti@gmail.com" ? <Nav.Item>
                <Nav.Link href="#newgroup" as={Link} to='/newgroup'>
                    <i className="material-icons">group_add</i>
                </Nav.Link>
            </Nav.Item> : null}

            <Nav.Item>
                <Nav.Link href="#newuser" as={Link} to='/newuser'>
                    <i className="material-icons" >  person_add</i>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="#profile" as={Link} to='/profile'>
                    <i className="material-icons" >person</i>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="#signout" as={Link} to='/signin' onClick={props.signOut}>
                    <i className="material-icons"> input</i></Nav.Link>
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
