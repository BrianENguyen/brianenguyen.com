import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Jumbotron from './Jumbotron';

describe('Jumbotron', () => {
  test('renders Jumbotron component without errors', () => {
    render(<Jumbotron />);
  });

  test('renders correct elements and props', () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description',
      src: 'test.webp',
      srcMobile: 'test-mobile.webp',
    };
    render(<Jumbotron {...props} />);

    const titleElement = screen.getByText(props.title);
    const descriptionElement = screen.getByText(props.description);
    const imageElement = screen.getByAltText('');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain(props.srcMobile);
    expect(imageElement).toHaveClass('jumbotron__image');
  });
});
