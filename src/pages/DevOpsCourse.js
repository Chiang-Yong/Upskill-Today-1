import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const DevOpsCourse = () => {
  return (
    <div>
        <Breadcrumb>
        <Breadcrumb.Item href="career-pathway">Career Pathway</Breadcrumb.Item>
        <Breadcrumb.Item href="pathway-details">
          Pathway Details
        </Breadcrumb.Item>
        <Breadcrumb.Item active>DevOps Course</Breadcrumb.Item>
      </Breadcrumb>
      <h1>DevOps Course</h1>
      </div>
  )
}

export default DevOpsCourse