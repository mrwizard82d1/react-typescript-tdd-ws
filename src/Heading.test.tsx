import React from "react";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

test("renders heading", () => {
  render(<Heading />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

test("render heading with an argument", () => {
  render(<Heading name={`World`} />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});