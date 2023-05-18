import AboutView from './AboutView';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

global.console.warn = jest.fn();

describe('AboutView', () => {
  test('renders text correctly', () => {
    const { getByText } = render(<AboutView />);
    const jumboText = getByText(/about me/i);
    expect(jumboText).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<AboutView />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders multiple images with correct attributes', () => {
    render(<AboutView />);
    const imageElements = screen.getAllByRole('img');
    imageElements.forEach((imageElement) => {
      expect(imageElement).toHaveAttribute('alt');
      expect(imageElement.src).toContain('.webp');
    });
  });
});
