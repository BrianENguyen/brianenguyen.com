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

  test('renders correct elements if blog is work in progress', () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description',
      image: 'test.webp',
      date: 'WIP',
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
    const readMoreElement = document.querySelector('.blog-card__date');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.textContent).toContain(`Coming soon: ${props.title}`);
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain(props.image);
    expect(dateElement).toBeInTheDocument();
    expect(dateElement.textContent).toBe('WIP');
    expect(readMoreElement).toBeInTheDocument();
    expect(readMoreElement.textContent).toContain('WIP');
  });
});
