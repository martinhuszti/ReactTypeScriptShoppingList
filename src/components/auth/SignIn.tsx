import React, { useState, CSSProperties } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'

const SignIn = (props: any) => {

    const [cred] = useState({ email: "", password: "" });
    const { authError, auth } = props
    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        props.signIn(cred)
    }

    const dashboardStyle = {
        marginTop : '1em'
    } as CSSProperties

    if (auth.uid) return <Redirect to='/' />

    return (
        <div style={dashboardStyle} className="container">
            <h1>Bejelentkezés</h1>


            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email cím</Form.Label>
                    <Form.Control autoComplete="email" onChange={(e: any) => cred.email = (e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Jelszó</Form.Label>
                    <Form.Control autoComplete="password" onChange={(e: any) => cred.password = (e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Bejelentkezés
</Button>
            </Form>

            <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
            </div>
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
