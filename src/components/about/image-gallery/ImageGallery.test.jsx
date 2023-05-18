import ImageGallery from './ImageGallery';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

global.console.warn = jest.fn();

describe('ImageGallery', () => {
  test('renders the image gallery component without errors', () => {
    render(<ImageGallery />);
    const gallery = screen.getByTestId('image-gallery');
    expect(gallery).toBeInTheDocument();
  });

  test('renders multiple images with correct attributes', () => {
    render(<ImageGallery />);
    const imageElements = screen.getAllByRole('img');
    imageElements.forEach((imageElement) => {
      expect(imageElement).toHaveAttribute('alt');
      expect(imageElement.src).toContain('.webp');
    });
  });
});
