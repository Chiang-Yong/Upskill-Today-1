import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen, cleanup } from '@testing-library/react';
import About from '../pages/About/About.js';

//require to ensure the testing is in initial state
afterEach(() => {
  cleanup();
});

describe("Tesing Navbar component", () => {

  // ensure testing library is working...
  it("try about to test..", () => {
    expect(true).toBe(true);
  });

  //create test from here...


});