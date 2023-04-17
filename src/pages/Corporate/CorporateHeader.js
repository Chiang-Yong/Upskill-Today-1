import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import "./corporateHeader.css"

const CorporateHeader = () => {
    return (
        <Container className="corporateHeader">
            <Row>
                <Col style={{ padding: "0px" }}>
                    <h1 className="corporateHeader-title">
                        Corporate
                    </h1>
                </Col>
            </Row>


        </Container>

    )
}

export default CorporateHeader