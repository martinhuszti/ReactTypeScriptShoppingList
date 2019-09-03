import React, { useState, CSSProperties } from 'react'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import User from "../../models/User"

const SignIn = (props: any) => {

    const [newUser] = useState(new User())
    const { auth, authError } = props
    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        props.signUp(newUser)
    }

    const pStyle = {
        marginTop: '1em',
    } as CSSProperties

    if (!auth.uid) return <Redirect to='/signin' />

    return (
        <Container>
            <h1 style={pStyle}> Új felhasználó hozzáadaása a csoporthoz</h1>
            <Form onSubmit={handleSubmit}>


                <Form.Row>

                    <Col>
                        <Form.Group controlId="formNickname">
                            <Form.Label>Név</Form.Label>
                            <Form.Control autoFocus required autoComplete="text" onChange={(e: any) => newUser.nickName = e.target.value} type="text" placeholder="Név" />
                            <Form.Text className="text-muted">Ez fog megjelenni a termékek alatt</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email cím</Form.Label>
                            <Form.Control required autoComplete="email" onChange={(e: any) => newUser.email = e.target.value} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">Ezzel tudsz majd bejelentkezni</Form.Text>
                        </Form.Group>
                    </Col>

                </Form.Row>



                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Jelszó</Form.Label>
                    <Form.Control required autoComplete="password" onChange={(e: any) => newUser.password = e.target.value} type="password" placeholder="Enter password" />
                    <Form.Text className="text-muted">
                        Ezzel lesz a jelszavad
                        </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Regisztáció
                    </Button>
            </Form>

            <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
            </div>
        </Container>

    )
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signUp: (newUser: any) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
