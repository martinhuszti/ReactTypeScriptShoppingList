import React, { useState, Dispatch } from 'react'
import { connect, DispatchProp } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const SignIn = (props: any) => {
    const credTemplate = { email: "", password: "" }
    const [cred] = useState(credTemplate);
    const { authError } = props
    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        props.signIn(cred)
    }


    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={e => cred.email = (e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={e => cred.password = (e.target.value)} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                    {authError ? <p>{authError}</p> : null}
                </form>
            </div>

        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signIn: (cred: any) => dispatch(signIn(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
