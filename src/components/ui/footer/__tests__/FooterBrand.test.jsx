import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FooterBrand from '../FooterBrand';

describe('FooterBrand test suite', () => {
  test('renders FooterBrand component without errors', () => {
    const { getByAltText } = render(<FooterBrand />);

    const imgElement = getByAltText('BEN Logo');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_110/v1662578878/BEN_Website/BEN-logo-navbar.webp'
    );
    expect(imgElement).toHaveAttribute('width', '150px');
    expect(imgElement).toHaveAttribute('height', '120px');
    expect(imgElement).toHaveClass('footer__brand');
  });
});
