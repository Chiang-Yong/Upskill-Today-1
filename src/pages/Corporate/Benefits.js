import React from 'react'
import "./benefits.css"
import { Container, Button, Card, Carousel, Row } from "react-bootstrap";
import CostSavings from "../../images/CostSavings.jpg";
import { Icon } from "react-icons-kit";
import { thumbsOUp } from 'react-icons-kit/fa/thumbsOUp'
import { chain } from 'react-icons-kit/fa/chain'
import { dollar } from 'react-icons-kit/fa/dollar'

const Benefits = () => {
    return (
        <Container className="benefits" fluid>
            <Row>
                <h1 className="benefits-title"> Benefits</h1>
            </Row>

            <Row xs={1} md={3} className="g-3 d-flex justify-content-center">

                <Card>
                    <Card.Body>
                        <Icon size={64} icon={dollar} style={{ color: "#ff7b00" }} className="d-flex justify-content-center" />
                        <Card.Title className="d-flex justify-content-center">
                            Cost Savings
                        </Card.Title>
                        <Card.Text className="d-flex justify-content-center"></Card.Text>
                        <Card.Text className="d-flex justify-content-center">
                            Up to 50% savings on usual rates from recruitment campanies
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Icon size={64} icon={chain} style={{ color: "#ff7b00" }} className="d-flex justify-content-center" />
                        <Card.Title className="d-flex justify-content-center">
                            Best Match
                        </Card.Title>
                        <Card.Text className="d-flex justify-content-center"></Card.Text>
                        <Card.Text className="d-flex justify-content-center">
                            A pool of ready candidates trainable on your custom requirements
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Icon size={64} icon={thumbsOUp} style={{ color: "#ff7b00" }} className="d-flex justify-content-center" />
                        <Card.Title className="d-flex justify-content-center">
                            Competent Ready
                        </Card.Title>
                        <Card.Text className="d-flex justify-content-center"></Card.Text>
                        <Card.Text className="d-flex justify-content-center">
                            Readily available competent consultants to support your charter
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Row>
        </Container>
    )
}

export default Benefits