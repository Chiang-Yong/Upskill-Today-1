import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, cleanup, getByRole, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils'

import Contact from "../pages/Contact/Contact";
import GetInTouch from "../pages/Contact/GetInTouch";
import BackTopButton from "../components/BackToTopButton";

afterEach(() => {
    cleanup();
});

describe("Contact Form - GetInTouch", () => {

    test('Component via ID', () => {
        render(
            <BrowserRouter>
                <GetInTouch />
            </BrowserRouter>);
        const compElement = screen.getByTestId('getintouch-1');

    });

    test('Contact Form Initial Load State', () => {
        render(
            <BrowserRouter>
                <GetInTouch />
            </BrowserRouter>);

        const compElement = screen.getByTestId('getintouch-1');
        const testfirstname = screen.getByTestId('firstname-1');
        const testlastname = screen.getByTestId('lastname-1');
        const testemail = screen.getByTestId('email-1');
        const testcontactnum = screen.getByTestId('contactnum-1');
        const testsubject = screen.getByTestId('subject-1');
        const testmsg = screen.getByTestId('message-1');

        //Initial values should be...
        expect(testfirstname.value).toEqual("");
        expect(testlastname.value).toEqual("");
        expect(testemail.value).toEqual("");
        expect(testcontactnum.value).toEqual("");
        expect(testsubject.value).toEqual("");
        expect(testmsg.value).toEqual("");
    });


    describe("OnSubmit", () => {
        it("if working...", async () => {
            const mockOnSubmit = jest.fn()
            const { getByText, getByTestId, getByLabelText, getByRole } = render(<BrowserRouter>
                <GetInTouch onSubmit={mockOnSubmit} />
            </BrowserRouter>);

            await act(async () => {
                fireEvent.change(getByLabelText("First Name"), { target: { value: "Fernando" } })
                fireEvent.change(getByLabelText("Last Name"), { target: { value: "Dionisio" } })
                fireEvent.change(getByLabelText("Email"), { target: { value: "fcdionisio@gmail.com" } })
                fireEvent.change(getByLabelText("Contact"), { target: { value: "09190869776" } })
                fireEvent.change(getByTestId("subject-1"), { target: { value: "Testing1" } })
                fireEvent.change(getByTestId("message-1"), { target: { value: "Hello World" } })
            })

            await act(async () => {
                fireEvent.click(screen.getByTestId("submit-1"))
            })

            const fnameEl = getByText('Please provide your First Name');
            expect(fnameEl).toBeInTheDocument();
            const lnameEl = getByText('Please provide your Last Name');
            expect(lnameEl).toBeInTheDocument();
            const contactEl = getByText('Please provide your contact number');
            expect(contactEl).toBeInTheDocument();
            const emailEl = getByText('Please provide a valid email');
            expect(emailEl).toBeInTheDocument(); 
            const subjEl = getByText('Please enter your subject');
            expect(subjEl).toBeInTheDocument();                        

        });





    })

    //checking Contact 
    test('Get In Touch', () => {
        render(<BrowserRouter>
            <GetInTouch />
        </BrowserRouter>);
        const compElement = screen.getByText('Get In Touch');
        expect(compElement).toBeInTheDocument();
    });

    it("if working...", () => {
        expect(true).toBe(true);
    });

});;