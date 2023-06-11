import BlogData from '../../../helper/BlogData';
import BlogList from './BlogList';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('BlogList', () => {
  test('renders BlogList component without errors', () => {
    render(
      <BrowserRouter>
        <BlogList />
      </BrowserRouter>
    );
  });

  test('displays correct number of blog cards', () => {
    render(
      <BrowserRouter>
        <BlogList />
      </BrowserRouter>
    );

    const blogCardElements = screen.getAllByTestId('blog-card');
    expect(blogCardElements.length).toBe(BlogData.length);
  });
});
