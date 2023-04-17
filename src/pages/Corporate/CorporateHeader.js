import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import "./corporateHeader.css"

const CorporateHeader = () => {
    return (
        <Container className="corporateHeader" fluid>
            <Row>

                <h1 className="corporateHeader-title">
                    Corporate
                </h1>

            </Row>


        </Container>

    )
}

export default CorporateHeader