import React from 'react'
import "./accelerateLogos.css"
import { Row, Container } from "react-bootstrap";
//import Image from "react-bootstrap/Image";
//import accenture from "../../images/accenture.png";
////import dole from "../../images/dole.png";
////import visy from "../../images/visy.jfif";
//import oracle from "../../images/oracle.jfif";
//import utopia from "../../images/utopia.jpeg";
import CompaniesMarquee from '../Home/CompaniesMarquee';

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

            <CompaniesMarquee /> 
        </Container >

    )
}

export default AccelerateLogos


