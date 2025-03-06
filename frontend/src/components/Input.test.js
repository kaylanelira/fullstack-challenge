import {render, screen, fireEvent} from '@testing-library/react';
import Input from './Input';

test("renders input with correct placeholder", () => {
  render(<Input placeholder="Enter text"/>);
  const inputElement = screen.getByPlaceholderText(/Enter text/i);
  expect(inputElement).toBeInTheDocument();
});

test("renders input with correct type", () => {
  render(<Input placeholder="Enter text" type="number"/>);
  const inputElement = screen.getByRole("spinbutton");
  expect(inputElement).toHaveAttribute("type", "number");
});

test("updates value when typed into", () => {
  const handleChange = jest.fn();
  render(<Input placeholder="Enter text" value="" onChange={handleChange} />);
  
  const inputElement = screen.getByPlaceholderText(/enter text/i);
  fireEvent.change(inputElement, { target: { value: "typing" } });
  
  expect(handleChange).toHaveBeenCalledTimes(1);
});