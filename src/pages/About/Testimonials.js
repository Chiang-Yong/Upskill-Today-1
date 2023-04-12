import React from 'react'
import "./testimonials.css";
import testimonials from "../../images/testimonials.jpg";
const Testimonials = () => {
    return (
        <div className='testimonials'>
            <img src={testimonials} alt="testimonials" />
            <div className='centered'>
            <h1 className='text-center'>Testimonials</h1>
            <p className='text-center'>Working in progress</p>
            </div>
        </div>
    )
}

export default Testimonials