import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Facts from './Facts';

describe('Facts', () => {
  test('renders Facts component without any errors', () => {
    render(<Facts />);
  });
});
