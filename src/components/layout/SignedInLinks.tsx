import React from 'react'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props: any) => {
    return (
        <ul className="right">
            <li><a href="" onClick={props.signOut} >Log Out</a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
