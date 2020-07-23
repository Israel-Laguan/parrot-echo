import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Renders ParrotEcho', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ParrotEcho/i);
  expect(linkElement).toBeInTheDocument();
});
