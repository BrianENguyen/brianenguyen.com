import { queryAllByRole, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FooterButtons from '../FooterButtons';

describe('FooterButtons test suite', () => {
  test('renders the FooterButtons component without errors', () => {
    const { getByTestId } = render(<FooterButtons />);

    const githubButton = getByTestId('github-button');
    const githubLink = 'https://github.com/Buraiyen/';
    expect(githubButton).toBeInTheDocument();
    expect(githubButton).toHaveAttribute('href', githubLink);

    const linkedinButton = getByTestId('linkedin-button');
    const linkedinLink = 'https://www.linkedin.com/in/brian-e-nguyen/';
    expect(linkedinButton).toBeInTheDocument();
    expect(linkedinButton).toHaveAttribute('href', linkedinLink);
  });
});
