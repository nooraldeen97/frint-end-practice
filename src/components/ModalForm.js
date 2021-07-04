import React, { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap/';




class ModalForm extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update pikemons</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.formHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.name} name='name'/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>img URL</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.img} name='img'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>level</Form.Label>
                            <Form.Control type="text"  defaultValue={this.props.level} name='level'/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            save
                        </Button>
                    </Form>

                </Modal.Body>
            </Modal>
        )
    }
}

export default ModalForm;
