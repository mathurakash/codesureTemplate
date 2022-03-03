import { render, screen } from '@testing-library/react';
import App from './pp';

test('renders learn react link', () => {
  render(<Navlinkpp /Navlink);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
