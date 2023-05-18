import AboutView from './AboutView';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

global.console.warn = jest.fn();

describe('AboutView', () => {
  test('renders text correctly', () => {
    const { getByText } = render(<AboutView />);
    const jumboText = getByText(/about me/i);
    expect(jumboText).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<AboutView />);
    expect(asFragment()).toMatchSnapshot();
  });
});
