import { render, screen } from '@testing-library/react';
import Counter from "./Counter";

test('renders counter-with-redux h3', () => {
  render(<Counter />);
  const linkElement = screen.getByText(/counter/i);
  expect(linkElement).toBeInTheDocument();
});
