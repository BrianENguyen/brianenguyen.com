import AboutView from './AboutView';

describe('AboutView', () => {
  test('renders text correctly', () => {
    const { getTextBy } = render(<AboutView />);
    expect(getTextBy('About Me')).toBeInTheDocument();
  });
});
