import React from 'react'
import { Card, Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import "./collaborateWithUsForm.css"

const CollaborateWithUsForm = () => {
    return (
        <div className="collaborateWithUsForm border rounded-3">
            <Form>
                <h1 className="text-center">Collaborate With Us</h1>
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                </Row>


                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="Number" placeholder="Contact" />
                    </Form.Group>
                </Row>


                <Form.Group>
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Company" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Country" />
                </Form.Group>

                <Button
                    type="submit"
                    style={{
                        backgroundColor: "#ff7b00",
                        fontWeight: '600',
                        border: "none",
                        outline: "none",
                    }}
                >
                    Submit
                </Button>
            </Form>
        </div >
    )
}

export default CollaborateWithUsForm