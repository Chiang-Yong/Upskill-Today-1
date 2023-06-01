import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, cleanup } from '@testing-library/react';

import Home from "../pages/Home/Home";

afterEach(() => {
    cleanup();
});

describe("Testing Contact Component", () => {

    it("if working...", () => {
        expect(true).toBe(true);
    })
    test('Component via ID', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>);
        const compElement = screen.getByTestId('contact-1');
        expect(compElement).toBeInTheDocument();
    })
})    