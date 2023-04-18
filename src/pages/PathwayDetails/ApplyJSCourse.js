import React from 'react'
import { Row, Button } from 'react-bootstrap'

const AJSCstyle = {
    main:{
        width:"100%",
        height:"auto",

    },
    button: {
       
        marginTop: "5%",
        marginBottom: "5%",
        backgroundColor: "#ff7b00",
        fontWeight: "600",
        border: "none",
        outline: "none",
        width:"150px",
      },

    title:{
        marginTop:"5%",
        color:"#000",
        fontWeight:800,
        fontSize:"35px",
    }
}

const ApplyJSCourse = () => {
  return (
    <div style={AJSCstyle.main}>
        <Row>
            <h1 style={AJSCstyle.title} className='text-center'>Apply to Our JavaScript Developer Course</h1>
        </Row>
        <Row className='d-flex justify-content-center'>
            <Button type='submit' style={AJSCstyle.button}>
                APPLY
            </Button>
        </Row>
    </div>
  )
}

export default ApplyJSCourse