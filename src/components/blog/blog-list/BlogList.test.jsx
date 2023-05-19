import BlogData from '../../../helper/BlogData';
import BlogList from './BlogList';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
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
});
