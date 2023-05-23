import React from "react";
import "./benefits.css";
import { Row, Card, Container } from "react-bootstrap";

import CostSavings from "../../images/COST SAVINGS.png";
import BestMatch from "../../images/BEST MATCH.png";
import CompetentReady from "../../images/COMPETENT.png";

const Benefits = () => {
    return (
        <Container fluid className="benefits">
            <h1 className="benefits-title"> Benefits</h1>

            <Row xs={1} md={3} className="mx-auto  justify-content-evenly px-3 py-3">
                <Card className="border-0 mb-4" style={{ width: "20rem" }}>
                    <Card.Img
                        variant="top"
                        src={CostSavings}
                        className="img-fluid rounded mx-auto d-block"
                        style={{
                            objectFit: "contain",
                            textAlign: "center",
                            maxHeight: "7rem",
                            height: "100%",
                        }}
                    />
                    <Card.Body>
                        <Card.Title className="text-center fw-bold ">
                            Cost Savings
                        </Card.Title>
                        <Card.Text className="text-center">
                            Up to 50% savings on usual rates from recruitment campanies
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className=" border-0 mb-4" style={{ width: "20rem" }}>
                    <Card.Img
                        variant="top"
                        src={BestMatch}
                        className="img-fluid rounded mx-auto d-block "
                        style={{
                            objectFit: "contain",
                            textAlign: "center",
                            maxHeight: "7rem",
                            height: "100%",
                        }}
                    />
                    <Card.Body>
                        <Card.Title className="text-center fw-bold  ">
                            Best Match
                        </Card.Title>
                        <Card.Text className="text-center">
                            A pool of ready candidates trainable on your custom requirements
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className=" border-0 mb-4" style={{ width: "20rem" }}>
                    <Card.Img
                        variant="top"
                        src={CompetentReady}
                        className="rounded mx-auto d-block img-fluid"
                        style={{
                            objectFit: "contain",
                            textAlign: "center",
                            maxHeight: "7rem",
                            height: "100%",
                        }}
                    />
                    <Card.Body>
                        <Card.Title className="text-center fw-bold  ">
                            Competent Ready
                        </Card.Title>
                        <Card.Text className="text-center">
                            Readily available competent consultants to support your charter
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Benefits