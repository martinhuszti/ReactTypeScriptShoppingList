import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import {
    Collapse,
    Navbar as BootstrapNavbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const Navbar = (props: any) => {
    const { auth } = props
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    const [open, setOpen] = useState(false)
    return (

        // <nav className="nav-wrapper orange">
        //     <a href="#" data-target="mobile-demo" className="sidenav-trigger">
        //         <i className="material-icons">menu</i>
        //     </a>
        //     <div className="container">
        //         <Link to='/' className="brand-logo">Bevásárlólista</Link>
        //         {links}
        //     </div>
        // </nav>
        <div>
            <BootstrapNavbar color="orange" light expand="md" >
                <NavbarBrand href="/">Bevásárlólista</NavbarBrand>
                <NavbarToggler onClick={() => setOpen(!open)} />
                <Collapse isOpen={open} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                  </DropdownItem>
                                <DropdownItem>
                                    Option 2
                  </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </BootstrapNavbar>
        </div>

    )
}

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)

