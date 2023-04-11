import React from "react";
import "./testimontials.css"
import { Row, Container, Card, Button } from "react-bootstrap";
import Placeholder from "../../images/placeholder.jpg"



const Testimontials = () => {
    return (
        <div className="testimontials">
            <Container fluid>
                <Row className="px-5 py-3 mx-auto justify-content-around ">
                    <Card style={{ width: "30rem" }}>
                        <Card.Body>
                            <Card.Title className="text-left">CAREER PATHWAY</Card.Title>
                            <Card.Text className="fs-5 text-left">
                                Explore Our Pathway Options
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "30rem" }}>
                        <Card.Img
                            variant="top"
                            src={Placeholder}
                            className="rounded mx-0 d-block"
                            style={{
                                display: ' block',
                            }}
                        />
                        <Card.Body>
                            <Card.Title className="text-left">CORPORATE</Card.Title>
                            <Card.Text className="fs-5 text-left">
                                Work With Us
                            </Card.Text>
                            <Button variant="warning">FIND OUT MORE</Button>
                        </Card.Body>
                    </Card>


                </Row>
            </Container>
        </div>



    )

}

export default Testimontials;