import React from "react";
import { render, screen } from "@testing-library/react";
import App, {Heading} from "./App";

test("renders hello world", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders heading", () => {
  render(<Heading name={"React"}/>);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

test("render heading with an argument", () => {
  render(<Heading name={`World`}/>);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
