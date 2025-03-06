import { render, screen } from "@testing-library/react";
import Table from "./Table";

const mockTabledata = [
  { id: 1, first_name: "Carlos", last_name: "Moura", participation_pct: 5},
  { id: 2, first_name: "Fernanda", last_name: "Oliveira", participation_pct: 15},
]

test("renders table with correct header", () => {
  render(<Table participations={mockTabledata}/>);
  expect(screen.getByText("First Name")).toBeInTheDocument();
  expect(screen.getByText("Last Name")).toBeInTheDocument();
  expect(screen.getByText("Participation")).toBeInTheDocument();
})

test("renders table with correct rows", () => {
  render(<Table participations={mockTabledata}/>);
  expect(screen.getByText("Carlos")).toBeInTheDocument();
  expect(screen.getByText("Oliveira")).toBeInTheDocument();
  expect(screen.getByText("5%")).toBeInTheDocument();
})