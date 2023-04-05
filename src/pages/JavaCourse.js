import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const JavaCourse = () => {
  return (
    <div>
        <Breadcrumb>
        <Breadcrumb.Item href="career-pathway">Career Pathway</Breadcrumb.Item>
        <Breadcrumb.Item href="pathway-details">
          Pathway Details
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Java Course</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Java Course</h1>
      </div>
  )
}

export default JavaCourse