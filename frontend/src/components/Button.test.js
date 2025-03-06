import {render, screen} from '@testing-library/react';
import Button from "./Button";

test("renders button with correct name", () => {
  render(<Button name="Click me" type="submit"/>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders button with correct type", () => {
  render(<Button name="Click me" type="submit"/>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveAttribute("type", "submit");
});