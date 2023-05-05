import React from 'react'
import { Card, CardImg, Row } from 'react-bootstrap'
import Pega from '../../images/pega.png';

const CSCstyle = {
    card: {
        width:'18rem',
    },
}

const ComingSoonCourse = () => {
  return (
    <div className='mt-5 pt-5'>
        <h1 className='text-center mt-5 pb-3'>
            Coming Soon Opportunities
        </h1>
        <Row sx={1} md={2} className='g-4 d-flex justify-content-center mt-5 mb-5'>
        
        <Card style={CSCstyle.card} className='me-3'>
            <CardImg 
            variant="top"
            src={Pega}
            className="rounded d-block"
            style={{
              display: "block",
              objectFit: "scale-down",
              paddingTop: "5%",
            }}
            >
            </CardImg>
            <Card.Body>
                <Card.Title>
                    Application Developers (PEGA)
                </Card.Title>
                <Card.Text>
                    Become job-ready for Application Developer career opportunities. Learn while you earn!
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={CSCstyle.card} className=''>
            <CardImg 
            variant="top"
            src={Pega}
            className="rounded d-block"
            style={{
              display: "block",
              objectFit: "scale-down",
              paddingTop: "5%",
            }}
            >
            </CardImg>
            <Card.Body>
                <Card.Title>
                    Application Developers (PEGA)
                </Card.Title>
                <Card.Text>
                    Become job-ready for Application Developer career opportunities. Learn while you earn!
                </Card.Text>
            </Card.Body>
        </Card>
        </Row>
        <Row sx={1} md={2} className='g-4 d-flex justify-content-center mt-5 mb-5'>
        <Card style={CSCstyle.card} className='me-3'>
            <CardImg 
            variant="top"
            src={Pega}
            className="rounded d-block"
            style={{
              display: "block",
              objectFit: "scale-down",
              paddingTop: "5%",
            }}
            >
            </CardImg>
            <Card.Body>
                <Card.Title>
                    Application Developers (PEGA)
                </Card.Title>
                <Card.Text>
                    Become job-ready for Application Developer career opportunities. Learn while you earn!
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={CSCstyle.card} className=''>
            <CardImg 
            variant="top"
            src={Pega}
            className="rounded d-block"
            style={{
              display: "block",
              objectFit: "scale-down",
              paddingTop: "5%",
            }}
            >
            </CardImg>
            <Card.Body>
                <Card.Title>
                    Application Developers (PEGA)
                </Card.Title>
                <Card.Text>
                    Become job-ready for Application Developer career opportunities. Learn while you earn!
                </Card.Text>
            </Card.Body>
        </Card>

        </Row>
    </div>
  )
}

export default ComingSoonCourse