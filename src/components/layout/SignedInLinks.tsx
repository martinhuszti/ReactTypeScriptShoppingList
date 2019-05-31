import React from 'react'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import {Nav} from 'react-bootstrap'

const SignedInLinks = (props: any) => {
    return (
               <Nav variant="pills" >
               <Nav.Item>
                   <Nav.Link href="#/home" onClick={props.signOut} to='/'>Log out</Nav.Link>
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
