import React, { useState } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const SignIn = (props: any) => {

    const [cred] = useState({ email: "", password: "" });
    const { authError, auth } = props
    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        props.signIn(cred)
    }

    if (auth.uid) return <Redirect to='/' />

    return (
            <div className="container">
                <form onSubmit={handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" autoComplete="email" id="email" onChange={e => cred.email = (e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" autoComplete="current-password" id="password" onChange={e => cred.password = (e.target.value)} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 ">Login</button>
                    </div>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </form>
            </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signIn: (cred: any) => dispatch(signIn(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
