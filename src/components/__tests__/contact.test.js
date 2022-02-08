import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '../Contact/ContactForm';

test('Should render contact form component', () => {
  render(<ContactForm />);
  const contactElement = screen.getByTestId('contact-form');
  expect(contactElement).toBeInTheDocument();
});
