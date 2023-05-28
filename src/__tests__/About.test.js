import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen, cleanup } from '@testing-library/react';
import About from '../pages/About/About.js';


afterEach(() => {
  cleanup();
});

describe("Tesing About Page", () => {

  it("try about to test..", () => {
    expect(true).toBe(true);
  });

  test('render about page', () => {
    render(<BrowserRouter><About /></BrowserRouter>);
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
  });
});