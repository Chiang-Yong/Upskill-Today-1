import React from 'react'
import "./accelerateLogos.css"
import { Col, Row, Card, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import unilever from "../../images/unilever.jfif";
import dole from "../../images/dole.png";
import visy from "../../images/visy.jfif";
import oracle from "../../images/oracle.jfif";
import utopia from "../../images/utopia.jfif";



const AccelerateLogos = () => {
    return (
        <Container fluid className='AccelerateLogos'>

            <Row>
                <h1> Accelerate your Tech Recruitments</h1>
            </Row>


            <Row>
                <p >Our tech expertise has been recognised by more than <br />
                    16 hiring partners worldwide. Join our network today.</p>
            </Row>


            <Row className='logo'>
                <Col class="p-2 mx-5">
                    <Image
                        src={unilever}
                        className="img-fluid rounded mx-auto d-block"
                        style={{
                            objectFit: "contain",
                            textAlign: "center",
                            maxHeight: "7rem",
                            height: "100%",
                        }}
                    />
                </Col>
                <Col class="p-2 mx-5">
                    <Image
                        src={dole}
                        className="img-fluid rounded mx-auto d-block"
                        style={{
                            objectFit: "contain",
                            textAlign: "center",
                            maxHeight: "7rem",
                            height: "100%",
                        }}
                    />
                </Col>
                <Col class="p-2 mx-5">
                    <Image
                        src={visy}
                        className="img-fluid rounded mx-auto d-block"
                        style={{
                            objectFit: "contain",
                            textAlign: "center",
                            maxHeight: "7rem",
                            height: "100%",
                        }}
                    />
                </Col>
                <Col class="p-2 mx-5">
                    <Image
                        src={oracle}
                        className="img-fluid rounded mx-auto d-block"
                        style={{
                            objectFit: "contain",
                            textAlign: "center",
                            maxHeight: "7rem",
                            height: "100%",
                        }}
                    />
                </Col>
                <Col class="p-2 mx-5">
                    <Image
                        src={utopia}
                        className="img-fluid rounded mx-auto d-block"
                        style={{
                            objectFit: "contain",
                            textAlign: "center",
                            maxHeight: "7rem",
                            height: "100%",
                        }}
                    />
                </Col>

            </Row>



        </Container >

    )
}

export default AccelerateLogos


