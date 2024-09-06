/**
 * path:  __tests__/Home.test.js
 */

import { render, screen } from '@testing-library/react';
import Home from '../../src/app/page';

describe('Home', () => {
  it('renders the "Get started by editing" message', () => {
    render(<Home />);
    const codeElement = screen.getByText(/Get started by editing/i);
    expect(codeElement).toBeInTheDocument();
  });

  it('renders the Next.js logo', () => {
    render(<Home />);
    const nextLogo = screen.getByAltText('Next.js Logo');
    expect(nextLogo).toBeInTheDocument();
  });

  it('renders the Vercel logo', () => {
    render(<Home />);
    const vercelLogo = screen.getByAltText('Vercel Logo');
    expect(vercelLogo).toBeInTheDocument();
  });
});