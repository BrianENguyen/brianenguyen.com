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
});
