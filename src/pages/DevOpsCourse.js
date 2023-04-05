import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const DevOpsCourse = () => {
  return (
    <div>
        <Breadcrumb>
        <Breadcrumb.Item href="careerpathway">Career Pathway</Breadcrumb.Item>
        <Breadcrumb.Item href="pathwaydetails">
          Pathway Details
        </Breadcrumb.Item>
        <Breadcrumb.Item active>DevOps Course</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='d-flex justify-content-center' style={{color:'#ff7b00'}}>DevOps Course</h1>
      </div>
  )
}

export default DevOpsCourse