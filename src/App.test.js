import { render, screen } from '@testing-library/react';
import App from './App';

test('yusuke debe aparecer la pantalla', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi I'm Yusuke!!/i);
  expect(linkElement).toBeInTheDocument();
});
