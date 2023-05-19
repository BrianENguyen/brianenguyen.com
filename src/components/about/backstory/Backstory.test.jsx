import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Backstory from './Backstory';

global.console.warn = jest.fn();

describe('Backstory', () => {
  test('renders Backstory component without errors', () => {
    render(<Backstory />);
  });

  test('renders Grid items with correct responsive layout', () => {
    const { container } = render(<Backstory />);
    const gridItems = container.querySelectorAll('.MuiGrid-item');
    expect(gridItems[0]).toHaveClass('MuiGrid-grid-xs-12');
    expect(gridItems[0]).toHaveClass('MuiGrid-grid-md-4');
    expect(gridItems[1]).toHaveClass('MuiGrid-grid-xs-12');
    expect(gridItems[1]).toHaveClass('MuiGrid-grid-md-8');
  });
});
