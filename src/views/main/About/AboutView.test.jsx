import AboutView from './AboutView';
import { render } from '@testing-library/react';

global.console.warn = jest.fn();

describe('AboutView', () => {
  test('renders text correctly', () => {
    const { getByText } = render(<AboutView />);
    expect(getByText(/about me/i).textContent).toEqual('About Me');
  });
});
