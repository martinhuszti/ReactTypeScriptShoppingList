import React from 'react'

import { connect } from "react-redux";
import { Container, Switch } from "@material-ui/core";
import { Col, Row } from "reactstrap";
import { Route } from 'react-router-dom';
import FamilyGroupCreate from '../group/FamilyGroupCreate';


const ProfileMainScreen = (props: any) => {

    return (
        <Container>
            <Row>

                <Col>
                    <a href="asd"><li>Profil</li></a>
                    <a href="asd"><li>Jelszómódosítás</li></a>
                </Col>

                <Col>
                    <Route path='/profile' component={FamilyGroupCreate} />
                </Col>
            </Row>

        </Container>

    )

}

const mapStateToProps = (state: any) => {
    return {
        profile: state.firebase.profile,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

export default ProfileMainScreen
