import ImageGallery from './ImageGallery';
import { render, screen } from '@testing-library/react';
import { ImageGalleryData } from '../../../helper/ImageGalleryData';
import '@testing-library/jest-dom';

global.console.warn = jest.fn();

describe('ImageGallery', () => {
  test('renders the image gallery component without errors', () => {
    render(<ImageGallery />);
    const gallery = screen.getByTestId('image-gallery');
    expect(gallery).toBeInTheDocument();
  });

  test('displays correct number of images', () => {
    render(<ImageGallery />);
    const imageElements = screen.getAllByRole('img');
    expect(imageElements.length).toBe(ImageGalleryData.length);
  });

  test('meets accessibility requirements', () => {
    render(<ImageGallery />);
    const imageElements = screen.getAllByRole('img');
    imageElements.forEach((imageElement) => {
      expect(imageElement).toHaveAttribute('alt');
      expect(imageElement).toHaveAttribute('aria-describedby');
      expect(imageElement).toHaveAccessibleName();
      expect(imageElement.src).toContain('.webp');
    });
  });
});
