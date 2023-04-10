import React from "react";
import "./statistics.css"
import { Col, Row, Container, Card } from "react-bootstrap";


const Statistics = () => {
    return (
        <div className="statistics">


            <Container fluid>
                <Row className="statistics-row mx-auto justify-content-between ">

                    <Card style={{ width: '14rem' }}>
                        <Card.Body>
                            <Card.Title className="text-center">
                                97%
                            </Card.Title>
                            <Card.Text className="text-center">
                                of graduates begin <br />
                                work in the IT sector
                            </Card.Text>
                        </Card.Body>
                    </Card>



                    <Card style={{ width: '14rem' }}>
                        <Card.Body>
                            <Card.Title className="text-center">
                                15+
                            </Card.Title >
                            <Card.Text className="text-center">
                                years of delivering <br />
                                excellence
                            </Card.Text>
                        </Card.Body>
                    </Card>



                    <Card style={{ width: '14rem' }}>

                        <Card.Body>
                            <Card.Title className="text-center">
                                200K
                            </Card.Title>
                            <Card.Text className="text-center">
                                students in our <br />
                                community
                            </Card.Text>
                        </Card.Body>

                    </Card>

                </Row>

            </Container>








        </div >


    )
}

export default Statistics;