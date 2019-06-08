import React, { useState, CSSProperties } from 'react'
import { connect } from 'react-redux';
import ShoppingItem from "../../models/ShoppingItem";
import { createItem } from '../../store/actions/shoppingItemActions';
import { Modal, Button, Form, Col } from 'react-bootstrap';

const ItemCreate = (props: any) => {
    const { showModal, setShowModal } = props
    const { auth }: { auth: any } = props
    const [item] = useState(new ShoppingItem());
    
    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        item.created_by_user_id = auth.uid
        props.createItem(item)
        setShowModal(false)
    }

    const pStyle = {
        width: '30%'
    } as CSSProperties

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Új Termék Felvétele</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e: any) => handleSubmit(e)}>

                    <Form.Group controlId="formMit">
                        <Form.Label>Mit?</Form.Label>
                        <Form.Control required onChange={(e: any) => item.title = e.target.value} type="email" placeholder="Kenyér..." />
                        <Form.Text className="text-muted">
                            Mit szeretnél venni. Pl. kenyér, vaj stb.
                      </Form.Text>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formMennyit">
                            <Form.Label>Mennyit?</Form.Label>
                            <Form.Control defaultValue={"1"}
                                onChange={(e: any) => item.quantity = e.target.value} type="number" placeholder="" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="fromMeasure">
                            <Form.Label>Mérték</Form.Label>
                            <Form.Control style={pStyle} as="select">
                                <option>db</option>
                                <option>kg</option>
                                <option>dkg</option>
                                <option>gramm</option>
                                <option>liter</option>
                                <option>dl</option>
                                <option>ml</option>
                                <option>doboz</option>
                                <option>zacskó</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formDesc">
                        <Form.Label>Leírás</Form.Label>
                        <Form.Control placeholder="Félbarna..." onChange={(e: any) => item.description = e.target.value} as="textarea" rows="2" />
                    </Form.Group>


                </Form>
            </Modal.Body>


            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Mégsem
                </Button>
                <Button variant="primary" onClick={(e: any) => handleSubmit(e)}>
                    Felvesz
                </Button>
            </Modal.Footer>
        </Modal >

    )
}

const mapDispatchProps = (dispatch: any) => {
    return {
        createItem: (item: ShoppingItem) => dispatch(createItem(item))
    }
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps, mapDispatchProps)(ItemCreate);