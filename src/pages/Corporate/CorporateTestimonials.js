import React from 'react'
import "./corporateTestimonials.css"
import { Col, Row, Card, Container } from "react-bootstrap";

import accenture from "../../images/accenture.png";
import Infosys from "../../images/Infosys.png";
import daimler from "../../images/daimler.png";


const CorporateTestimonials = () => {
    return (
        <Container fluid className="corporateTestimonials">
            <h1 className="corporateTestimonials-title"> Testimonials</h1>

            <Row xs={1} md={3} className="mx-auto  justify-content-evenly px-3 py-3">
                <Card className=" mb-4" style={{ paddingTop: "2%" }} >
                    <Card.Img
                        variant="top"
                        src={accenture}
                        className="img-fluid rounded mx-auto d-block"
                        style={{
                            objectFit: "contain",
                            textAlign: "center",
                            maxHeight: "4rem",
                            height: "100%",
                        }}
                    />
                    <Card.Body>

                        <Card.Text className="text-center">
                            "Lorem ipsum dolor sit amet, consectetur quam Duis vulputate commodo"
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className=" mb-4" >
                    <Card.Img
                        variant="top"
                        src={Infosys}
                        className="img-fluid rounded mx-auto d-block "
                        style={{
                            objectFit: "contain",
                            textAlign: "center",
                            maxHeight: "2rem",
                            height: "100%",
                        }}
                    />
                    <Card.Body>

                        <Card.Text className="text-center">
                            "Lorem ipsum dolor sit amet, consectetur quam Duis vulputate commodo"
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className=" mb-4" >
                    <Card.Img
                        variant="top"
                        src={daimler}
                        className="rounded mx-auto d-block img-fluid"
                        style={{
                            objectFit: "contain",
                            textAlign: "center",
                            maxHeight: "2rem",
                            height: "100%",
                        }}
                    />
                    <Card.Body>

                        <Card.Text className="text-center">
                            "Lorem ipsum dolor sit amet, consectetur quam Duis vulputate commodo"
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>


    )
}

export default CorporateTestimonials