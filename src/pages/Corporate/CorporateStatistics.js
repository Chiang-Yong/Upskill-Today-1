import React from 'react'
import { Row, Container, Card } from "react-bootstrap";

import "./corporateStatistics.css"

const CorporateStatistics = () => {
    return (
        <div className="corporatestatistics">
            <Container fluid>
                <Row className="px-5 py-3 mx-auto justify-content-around ">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title className="display-4 text-center">500+</Card.Title>
                            <Card.Text className="fs-5 text-center">
                                Projects
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title className="display-4 text-center">45+</Card.Title>
                            <Card.Text className="fs-5 text-center">
                                Customers
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title className="display-4 text-center">100+</Card.Title>
                            <Card.Text className="fs-5 text-center">
                                Professionals
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div >

    );

};

export default CorporateStatistics