import React from "react";
import "./testimontials.css"
import { Row, Container, Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Placeholder from "../../images/placeholder.jpg"



const Testimontials = () => {
    return (
        <div className="testimontials">
            <Container fluid>
                <Row className="px-5 py-3 mx-auto justify-content-around ">
                    <Card style={{ height: "40rem", width: "20rem" }}>
                        <Card.Body>
                            <Card.Title className="display-6 text-left">Get Inspired</Card.Title>
                            <Card.Text className="fs-5 text-left">
                                View the success stories of our graduates
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "60rem" }}>


                    </Card>


                </Row>
            </Container>
        </div>



    )

}

export default Testimontials;