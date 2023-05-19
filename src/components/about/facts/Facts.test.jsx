import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Facts from './Facts';

describe('Facts', () => {
  test('renders Facts component without any errors', () => {
    render(<Facts />);
  });

  test('renders header and subheader correctly', () => {
    const { getByText } = render(<Facts />);
    const headerElement = getByText(/things that define me/i);
    const subheaderElement = getByText(/i am a software developer/i);

    expect(headerElement).toBeInTheDocument();
    expect(subheaderElement).toBeInTheDocument();
  });
});
