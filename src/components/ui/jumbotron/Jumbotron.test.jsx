import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Jumbotron from './Jumbotron';

describe('Jumbotron', () => {
  test('renders Jumbotron component without errors', () => {
    render(<Jumbotron />);
  });
});
