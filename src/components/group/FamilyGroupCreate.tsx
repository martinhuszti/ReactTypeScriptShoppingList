import React, { useState, CSSProperties } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import User from './../../models/User'

const FamilyGroupCreate = (props: any) => {

    const [cred] = useState({ email: "", password: "" });
    const [newUser] = useState(new User());
    const { authError, auth, profile } = props

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        props.signIn(cred)
    }

    const dashboardStyle = {
        marginTop: '1em'
    } as CSSProperties

    //TODO kiszed komment ha végeztem
    // if (profile.email !== "martinhuszti@gmail.com") return <Redirect to='/' />

    return (
        <div style={dashboardStyle} className="container">
            <h1>Új csoport létrehozása</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Csoportnév</Form.Label>
                    <Form.Control autoComplete="text" onChange={(e: any) => cred.email = (e.target.value)} type="text" placeholder="Enter name" />
                    <Form.Text className="text-muted">
                        Ez lesz a csoport neve
                             </Form.Text>
                </Form.Group>

                <h2>Admin hozzáadása csoporthoz</h2>

                <Form.Group controlId="formNickname">
                    <Form.Label>Név</Form.Label>
                    <Form.Control required autoComplete="text" onChange={(e: any) => newUser.nickName = e.target.value} type="text" placeholder="Név" />
                    <Form.Text className="text-muted">
                        Ez fog megjelenni a termékek alatt
                 </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email cím</Form.Label>
                    <Form.Control required autoComplete="email" onChange={(e: any) => newUser.email = e.target.value} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Ezzel tudsz majd bejelentkezni
                        </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Jelszó</Form.Label>
                    <Form.Control required autoComplete="password" onChange={(e: any) => newUser.password = e.target.value} type="password" placeholder="Enter password" />
                    <Form.Text className="text-muted">
                        Ezzel lesz a jelszavad
                        </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Új csoport létrehozása
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
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signIn: (cred: any) => dispatch(signIn(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FamilyGroupCreate)
