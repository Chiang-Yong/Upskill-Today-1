import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const JavaCourse = () => {
  return (
    <div>
        <Breadcrumb>
        <Breadcrumb.Item href="careerpathway">Career Pathway</Breadcrumb.Item>
        <Breadcrumb.Item href="pathwaydetails">
          Pathway Details
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Java Course</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='d-flex justify-content-center'>Java Course</h1>
      </div>
  )
}

export default JavaCourse