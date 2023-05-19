import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import BlogCard from './BlogCard';
import '@testing-library/jest-dom';

describe('BlogCard', () => {
  test('renders the BlogCard without errors', () => {
    render(
      <BrowserRouter>
        <BlogCard link='/test' />
      </BrowserRouter>
    );
  });

  test('renders correct elements and props', () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description',
      image: 'test.webp',
      date: '2023-05-01',
      link: '/blog/1',
    };

    render(
      <BrowserRouter>
        <BlogCard {...props} />
      </BrowserRouter>
    );

    const titleElement = screen.getByText(props.title);
    const descriptionElement = screen.getByText(props.description);
    const imageElement = screen.getByAltText('');
    const dateElement = screen.getByText(props.date);
    const readMoreElement = screen.getByText('Read More');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain(props.image);
    expect(dateElement).toBeInTheDocument();
    expect(readMoreElement).toBeInTheDocument();
    expect(readMoreElement).toHaveAttribute('href', props.link);
  });
});
