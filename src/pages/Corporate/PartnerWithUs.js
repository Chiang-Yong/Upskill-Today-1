import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

import corporate_partner from "../../images/corporate_partner.jpg"
import "./partnerWithUs.css"

const PartnerWithUs = () => {
    return (
        <Container className="partnerus" fluid='true'>
            <Row>
                <Col>
                    <h1 style={{ marginTop: "15%" }}>Partner With Us</h1>
                    <p>
                        {" "}
                        Become part of our global hiring network and find the talent your company or startup needs today.
                    </p>

                </Col>
                <Col style={{ alignContent: 'center', alignItems: "center" }}>
                    <img src={corporate_partner} alt="corporate_partner" />
                </Col>
            </Row>
        </Container>
    )
}

export default PartnerWithUs