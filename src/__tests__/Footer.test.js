import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen, cleanup } from '@testing-library/react';
import Footer from '../components/Footer/Footer.js';

afterEach(() => {
    cleanup();
});


// Footer should have a PRIVACY AND POLICY 
test('Footer with Privacy and Policy', () => {
    render(<BrowserRouter>
        <Footer />
    </BrowserRouter>);
    const compElement = screen.getByText('Privacy Policy');
    expect(compElement).toBeInTheDocument();
});

// Footer should have a Terms and Conditions
test('Footer with Terms & Conditions', () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>);
    const compElement = screen.getByText('Terms & Conditions');
    expect(compElement).toBeInTheDocument();
});

// Footer should have a the company Email address
test('Footer with Company E-mail address', () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>);
    const compElement = screen.getByText('hello@upskilltoday.com');
    expect(compElement).toBeInTheDocument();
});

test('Try by ID and its components', () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>);
    const compElement = screen.getByTestId('footer-1');
    expect(compElement).toBeInTheDocument();
    expect(compElement).toHaveTextContent('upskilltoday.com');
    expect(compElement).not.toContainHTML('<nonehtml>');
    expect(compElement).not.toContainHTML('<nonehtml1>');
});


it("Try NO test...", () => {
    expect(true).toBe(true);
});

