import React from 'react'
import { Container, Row } from "react-bootstrap"
import "./corporateHeader.css"

const CorporateHeader = () => {
    return (
        <Container className="corporateHeader mt-5" fluid>
            <Row>

                <h1 className="corporateHeader-title mt-3">
                    Corporate
                </h1>

            </Row>


        </Container>

    )
}

export default CorporateHeader