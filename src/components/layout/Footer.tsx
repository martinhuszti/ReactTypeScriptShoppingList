import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { Container,Button, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const Footer = (props: any) => {
    const { auth } = props
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <Fab color="secondary" aria-label="Add" className="fab">
        <AddIcon />
      </Fab>
    )
}

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Footer)

