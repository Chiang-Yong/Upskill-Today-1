import React from 'react'
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Placeholder from "../../images/placeholder.jpg"
import "./abouttestimontials.css"
import { Link } from 'react-router-dom'

const Testimontials = () => {
    return (

        <div className="about-testimontial">
            <Container fluid>
                <Row className="px-5 py-3 mx-auto justify-content-around ">
                    <Card className="border-2" >

                        <Card.Body>
                            <h1>Join Upskill Today!</h1>
                            <Card.Text className="text-left">
                                If you are looking to enhance your skills, you have coming at the right place. We are looking for candidates who are open to learn new skills to improve your career prospects and keep up with changing technologies.
                            </Card.Text>
                            <Link to="/CareerPathway"><Button style={{ backgroundColor: '#ff7b00' }} >Join Upskill Today</Button></Link>
                        </Card.Body>
                    </Card>

                    <Card>

                        <Card.Body>
                            <h1>Engage Upskill Today!</h1>

                            <Card.Text className="text-left">
                                We provide companies with a pool of top talents that have trained in the latest skills and technologies. We also offer customized solutions that can be tailored to the specific needs of your business.
                            </Card.Text>
                            <Link to='/Corporate'><Button style={{ backgroundColor: '#ff7b00' }} >Explore More</Button></Link>
                        </Card.Body>
                    </Card>

                </Row>
            </Container>
        </div>

    )
}

export default Testimontials
