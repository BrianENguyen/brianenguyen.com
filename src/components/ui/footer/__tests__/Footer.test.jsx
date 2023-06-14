import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer test suite', () => {
  it('renders the Footer component with the correct elements and content', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    // Check for specific elements and their content
    expect(
      screen.getByText(`${new Date().getFullYear()} — Brian Nguyen`)
    ).toBeInTheDocument();

    // Check for specific links and their attributes
    expect(screen.getByText('Submit a pull request!')).toHaveAttribute(
      'href',
      'https://github.com/Buraiyen/BEN-Website-React'
    );
    expect(screen.getByText('brian.edison.nguyen@gmail.com')).toHaveAttribute(
      'href',
      'mailto:brian.edison.nguyen@gmail.com'
    );
  });
});
