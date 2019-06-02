import React, { useState } from 'react'
import { connect } from 'react-redux';
import ShoppingItem from "../../models/ShoppingItem";
import { createItem } from '../../store/actions/shoppingItemActions';
import { Modal, Button, Form, Col } from 'react-bootstrap';

const ItemCreate = (props: any) => {
    const { showModal, setShowModal } = props

    const [item] = useState(new ShoppingItem());


    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        props.createItem(item)
        setShowModal(false)
    }

    const pStyle = {
        width: '30%'
    }

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
                            <Form.Control onChange={(e: any) => item.quantity = e.target.value} type="number" placeholder="" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Mérték</Form.Label>
                            <Form.Control style={pStyle} as="select">
                                <option>db</option>
                                <option>kg</option>
                                <option>dkg</option>
                                <option>gramm</option>
                                <option>liter</option>
                                <option>dl</option>
                                <option>ml</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
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

export default connect(null, mapDispatchProps)(ItemCreate);