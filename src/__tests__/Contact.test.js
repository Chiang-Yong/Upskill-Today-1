import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, cleanup } from '@testing-library/react';

import Contact from "../pages/Contact/Contact";
import GetInTouch from "../pages/Contact/GetInTouch";
import BackTopButton from "../components/BackToTopButton";

afterEach(() => {
  cleanup();
});

describe("Testing Contact Component", () => {
     
   test('Component via ID', () => {
      render(
        <BrowserRouter>
            <Contact />
        </BrowserRouter>);
    const compElement = screen.getByTestId('contact-1');
    expect(compElement).toBeInTheDocument();
    expect(compElement).toHaveTextContent('Get In Touch');    
    expect(compElement).toHaveTextContent('Call Us');
    expect(compElement).toHaveTextContent('Email Us');
    expect(compElement).toHaveTextContent('Visit Us');
    expect(compElement).toHaveTextContent('upskilltoday.com');    
    expect(compElement).toHaveTextContent('Submit'); 
    });

    test('Contact Elements/Form', () => {
      render(
        <BrowserRouter>
            <Contact />
        </BrowserRouter>);
    const compElement = screen.getByTestId('contact-1');
    expect(compElement).toBeInTheDocument();
    expect(compElement).toHaveTextContent('First Name');    
    expect(compElement).toHaveTextContent('Last Name');
    //expect(compElement).toHaveTextContent('Birthday');
    expect(compElement).toHaveTextContent('Email');
    expect(compElement).toHaveTextContent('Contact');
    expect(compElement).toHaveTextContent('Subject');    
    expect(compElement).toHaveTextContent('Message'); 
    });


    //checking Contact 
    test('Get In Touch', () => {
      render(<BrowserRouter>
          <Contact />
      </BrowserRouter>);
      const compElement = screen.getByText('Get In Touch');
      expect(compElement).toBeInTheDocument();
  });    


  });

